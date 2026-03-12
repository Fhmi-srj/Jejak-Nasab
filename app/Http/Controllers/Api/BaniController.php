<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Bani;
use App\Models\BaniUser;
use App\Models\Marriage;
use App\Models\Member;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BaniController extends Controller
{
    // GET /api/banis
    public function index(Request $request): JsonResponse
    {
        try {
            $user = $request->user();

            $baniUsers = BaniUser::where('user_id', $user->id)
                ->with(['bani' => function ($q) {
                    $q->withCount('members')
                      ->with('createdBy:id,name');
                }])
                ->orderBy('joined_at', 'desc')
                ->get();

            $result = $baniUsers->map(function ($bu) {
                $bani = $bu->bani->toArray();
                $bani['userRole'] = $bu->role;
                return $bani;
            });

            return response()->json($result);
        } catch (\Exception $e) {
            \Log::error('Get banis error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // POST /api/banis
    public function store(Request $request): JsonResponse
    {
        try {
            $user = $request->user();
            $data = $request->all();

            if (empty($data['name'])) {
                return response()->json(['error' => 'Nama bani harus diisi'], 400);
            }

            if (empty($data['rootMemberName'])) {
                return response()->json(['error' => 'Nama leluhur (asal nasab) harus diisi'], 400);
            }

            // Check tier limit
            $userWithTier = $user->load('tier');
            $createdBanisCount = $user->createdBanis()->count();

            if ($userWithTier->tier) {
                if ($createdBanisCount >= $userWithTier->tier->max_banis) {
                    return response()->json([
                        'error' => "Kelas \"{$userWithTier->tier->name}\" hanya bisa membuat maksimal {$userWithTier->tier->max_banis} bani. Upgrade kelas Anda untuk membuat lebih banyak."
                    ], 403);
                }
            }

            $result = DB::transaction(function () use ($data, $user) {
                $bani = Bani::create([
                    'name' => $data['name'],
                    'description' => $data['description'] ?? null,
                    'created_by_id' => $user->id,
                ]);

                $rootMember = null;
                if (!empty($data['rootMemberName'])) {
                    $rootMember = Member::create([
                        'bani_id' => $bani->id,
                        'full_name' => $data['rootMemberName'],
                        'gender' => $data['rootMemberGender'] ?? 'MALE',
                        'generation' => 0,
                        'added_by_id' => $user->id,
                    ]);

                    $bani->update(['root_member_id' => $rootMember->id]);
                }

                BaniUser::create([
                    'bani_id' => $bani->id,
                    'user_id' => $user->id,
                    'role' => 'ADMIN',
                ]);

                ActivityLog::create([
                    'user_id' => $user->id,
                    'bani_id' => $bani->id,
                    'action' => 'CREATE',
                    'entity_type' => 'BANI',
                    'entity_id' => $bani->id,
                    'description' => "Membuat bani \"{$data['name']}\"",
                ]);

                return ['bani' => $bani, 'rootMember' => $rootMember];
            });

            return response()->json($result, 201);
        } catch (\Exception $e) {
            \Log::error('Create bani error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // DELETE /api/banis/{id}
    public function destroy(Request $request, string $id): JsonResponse
    {
        try {
            $user = $request->user();

            $bani = Bani::withCount('members')->find($id);
            if (!$bani) {
                return response()->json(['error' => 'Bani tidak ditemukan'], 404);
            }

            $isSuperAdmin = $user->role === 'SUPER_ADMIN';
            $isCreator = $bani->created_by_id === $user->id;

            if (!$isSuperAdmin && !$isCreator) {
                $baniUser = BaniUser::where('bani_id', $id)
                    ->where('user_id', $user->id)
                    ->first();
                if (!$baniUser || $baniUser->role !== 'ADMIN') {
                    return response()->json(['error' => 'Hanya admin bani yang bisa menghapus bani ini'], 403);
                }
            }

            DB::transaction(function () use ($id) {
                Bani::where('id', $id)->update(['root_member_id' => null]);

                $memberIds = Member::where('bani_id', $id)->pluck('id')->toArray();
                if (count($memberIds) > 0) {
                    Marriage::whereIn('husband_id', $memberIds)
                        ->orWhereIn('wife_id', $memberIds)
                        ->delete();
                }

                ActivityLog::where('bani_id', $id)->delete();
                BaniUser::where('bani_id', $id)->delete();
                Member::where('bani_id', $id)->delete();
                Bani::where('id', $id)->delete();
            });

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            \Log::error('Delete bani error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // GET /api/banis/{id}/settings
    public function settings(Request $request, string $id): JsonResponse
    {
        try {
            $bani = Bani::select('tree_orientation', 'is_public', 'show_wa_public', 'show_birth_public', 'show_address_public', 'show_socmed_public', 'card_theme')
                ->find($id);

            if (!$bani) {
                return response()->json(['error' => 'Not found'], 404);
            }

            return response()->json($bani);
        } catch (\Exception $e) {
            \Log::error('Get bani settings error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // PATCH /api/banis/{id}/settings
    public function updateSettings(Request $request, string $id): JsonResponse
    {
        try {
            $user = $request->user();

            $baniUser = BaniUser::where('bani_id', $id)
                ->where('user_id', $user->id)
                ->first();
            $isAdmin = $user->role === 'SUPER_ADMIN';

            if (!$baniUser && !$isAdmin) {
                return response()->json(['error' => 'Forbidden'], 403);
            }
            if ($baniUser && $baniUser->role === 'VIEWER') {
                return response()->json(['error' => 'Forbidden'], 403);
            }

            $data = $request->all();
            $updateData = [];
            $fields = ['tree_orientation', 'is_public', 'show_wa_public', 'show_birth_public', 'show_address_public', 'show_socmed_public', 'card_theme'];

            // Map camelCase request keys to snake_case DB columns
            $mapping = [
                'treeOrientation' => 'tree_orientation',
                'isPublic' => 'is_public',
                'showWaPublic' => 'show_wa_public',
                'showBirthPublic' => 'show_birth_public',
                'showAddressPublic' => 'show_address_public',
                'showSocmedPublic' => 'show_socmed_public',
                'cardTheme' => 'card_theme',
            ];

            foreach ($mapping as $camel => $snake) {
                if (isset($data[$camel])) {
                    $updateData[$snake] = $data[$camel];
                }
            }

            $bani = Bani::findOrFail($id);
            $bani->update($updateData);

            $updated = Bani::select('tree_orientation', 'is_public', 'show_wa_public', 'show_birth_public', 'show_address_public', 'show_socmed_public', 'card_theme')
                ->find($id);

            return response()->json($updated);
        } catch (\Exception $e) {
            \Log::error('Update bani settings error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }
}
