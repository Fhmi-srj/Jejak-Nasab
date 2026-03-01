<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Bani;
use App\Models\BaniUser;
use App\Models\Member;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MemberController extends Controller
{
    // GET /api/members?baniId=xxx
    public function index(Request $request): JsonResponse
    {
        try {
            $user = $request->user();
            $baniId = $request->query('baniId');

            if (!$baniId) {
                return response()->json(['error' => 'baniId is required'], 400);
            }

            $baniUser = BaniUser::where('bani_id', $baniId)
                ->where('user_id', $user->id)
                ->first();

            $isAdmin = $user->role === 'SUPER_ADMIN';
            if (!$baniUser && !$isAdmin) {
                return response()->json(['error' => 'Access denied'], 403);
            }

            $members = Member::where('bani_id', $baniId)
                ->with([
                    'father:id,full_name',
                    'mother:id,full_name',
                    'marriagesAsHusband' => function ($q) {
                        $q->select('id', 'husband_id', 'wife_id', 'marriage_order')
                          ->with('wife:id,full_name,photo,gender')
                          ->orderBy('marriage_order', 'asc');
                    },
                    'marriagesAsWife' => function ($q) {
                        $q->select('id', 'husband_id', 'wife_id', 'marriage_order')
                          ->with('husband:id,full_name,photo,gender')
                          ->orderBy('marriage_order', 'asc');
                    },
                ])
                ->orderBy('generation', 'asc')
                ->orderBy('full_name', 'asc')
                ->get();

            return response()->json($members);
        } catch (\Exception $e) {
            \Log::error('Get members error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // POST /api/members
    public function store(Request $request): JsonResponse
    {
        try {
            $user = $request->user();
            $data = $request->all();

            if (empty($data['baniId']) || empty($data['fullName']) || empty($data['gender'])) {
                return response()->json(['error' => 'Nama, jenis kelamin, dan bani harus diisi'], 400);
            }

            $baniUser = BaniUser::where('bani_id', $data['baniId'])
                ->where('user_id', $user->id)
                ->first();

            if (!$baniUser || $baniUser->role === 'VIEWER') {
                return response()->json(['error' => 'Tidak memiliki akses edit'], 403);
            }

            // Calculate generation
            $generation = 0;
            if (!empty($data['fatherId'])) {
                $father = Member::select('generation')->find($data['fatherId']);
                if ($father) $generation = $father->generation + 1;
            } elseif (!empty($data['motherId'])) {
                $mother = Member::select('generation')->find($data['motherId']);
                if ($mother) $generation = $mother->generation + 1;
            }

            // Check max generation limit
            $bani = Bani::with('createdBy.tier')->find($data['baniId']);
            $maxGen = $bani?->createdBy?->tier?->max_generations ?? 10;
            if ($generation >= $maxGen) {
                $tierName = $bani?->createdBy?->tier?->name ?? 'default';
                return response()->json([
                    'error' => "Kelas \"{$tierName}\" hanya mendukung maksimal {$maxGen} generasi. Upgrade kelas untuk menambah lebih banyak generasi."
                ], 403);
            }

            $member = Member::create([
                'bani_id' => $data['baniId'],
                'full_name' => $data['fullName'],
                'nickname' => $data['nickname'] ?? null,
                'gender' => $data['gender'],
                'birth_date' => !empty($data['birthDate']) ? $data['birthDate'] : null,
                'birth_place' => $data['birthPlace'] ?? null,
                'death_date' => !empty($data['deathDate']) ? $data['deathDate'] : null,
                'is_alive' => $data['isAlive'] ?? true,
                'address' => $data['address'] ?? null,
                'city' => $data['city'] ?? null,
                'phone_whatsapp' => $data['phoneWhatsapp'] ?? null,
                'social_media' => $data['socialMedia'] ?? [],
                'bio' => $data['bio'] ?? null,
                'father_id' => $data['fatherId'] ?? null,
                'mother_id' => $data['motherId'] ?? null,
                'generation' => $generation,
                'added_by_id' => $user->id,
            ]);

            ActivityLog::create([
                'user_id' => $user->id,
                'bani_id' => $data['baniId'],
                'action' => 'CREATE',
                'entity_type' => 'MEMBER',
                'entity_id' => $member->id,
                'description' => "Menambahkan anggota \"{$data['fullName']}\"",
                'new_values' => ['fullName' => $data['fullName'], 'gender' => $data['gender'], 'generation' => $generation],
            ]);

            return response()->json($member, 201);
        } catch (\Exception $e) {
            \Log::error('Create member error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // GET /api/members/{memberId}
    public function show(Request $request, string $memberId): JsonResponse
    {
        try {
            $member = Member::with(['father:id,full_name', 'mother:id,full_name'])->find($memberId);

            if (!$member) {
                return response()->json(['error' => 'Member not found'], 404);
            }

            return response()->json($member);
        } catch (\Exception $e) {
            \Log::error('Get member error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // PATCH /api/members/{memberId}
    public function update(Request $request, string $memberId): JsonResponse
    {
        try {
            $user = $request->user();
            $data = $request->all();

            $existingMember = Member::select('id', 'bani_id', 'full_name')->find($memberId);
            if (!$existingMember) {
                return response()->json(['error' => 'Member not found'], 404);
            }

            $baniUser = BaniUser::where('bani_id', $existingMember->bani_id)
                ->where('user_id', $user->id)
                ->first();

            if (!$baniUser || $baniUser->role === 'VIEWER') {
                return response()->json(['error' => 'Tidak memiliki akses edit'], 403);
            }

            // Recalculate generation if parent changed
            $generation = null;
            if (isset($data['fatherId']) || isset($data['motherId'])) {
                $parentId = $data['fatherId'] ?? $data['motherId'] ?? null;
                if ($parentId) {
                    $parent = Member::select('generation')->find($parentId);
                    if ($parent) $generation = $parent->generation + 1;
                }
            }

            $updateData = [];
            $mapping = [
                'fullName' => 'full_name',
                'nickname' => 'nickname',
                'gender' => 'gender',
                'birthDate' => 'birth_date',
                'birthPlace' => 'birth_place',
                'deathDate' => 'death_date',
                'isAlive' => 'is_alive',
                'address' => 'address',
                'city' => 'city',
                'phoneWhatsapp' => 'phone_whatsapp',
                'socialMedia' => 'social_media',
                'bio' => 'bio',
                'fatherId' => 'father_id',
                'motherId' => 'mother_id',
            ];

            foreach ($mapping as $camel => $snake) {
                if (array_key_exists($camel, $data)) {
                    $value = $data[$camel];
                    // Handle nullable/empty fields
                    if (in_array($camel, ['nickname', 'birthPlace', 'address', 'city', 'phoneWhatsapp', 'bio', 'fatherId', 'motherId'])) {
                        $updateData[$snake] = $value ?: null;
                    } elseif (in_array($camel, ['birthDate', 'deathDate'])) {
                        $updateData[$snake] = $value ? $value : null;
                    } elseif ($camel === 'socialMedia') {
                        $updateData[$snake] = $value ?: [];
                    } else {
                        $updateData[$snake] = $value;
                    }
                }
            }

            if ($generation !== null) {
                $updateData['generation'] = $generation;
            }

            $existingMember->update($updateData);
            $updated = $existingMember->fresh();

            ActivityLog::create([
                'user_id' => $user->id,
                'bani_id' => $existingMember->bani_id,
                'action' => 'UPDATE',
                'entity_type' => 'MEMBER',
                'entity_id' => $memberId,
                'description' => "Mengubah data anggota \"{$updated->full_name}\"",
                'old_values' => ['fullName' => $existingMember->full_name],
                'new_values' => $updateData,
            ]);

            return response()->json($updated);
        } catch (\Exception $e) {
            \Log::error('Update member error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // DELETE /api/members/{memberId}
    public function destroy(Request $request, string $memberId): JsonResponse
    {
        try {
            $user = $request->user();

            $member = Member::select('id', 'bani_id', 'full_name')->find($memberId);
            if (!$member) {
                return response()->json(['error' => 'Member not found'], 404);
            }

            $baniUser = BaniUser::where('bani_id', $member->bani_id)
                ->where('user_id', $user->id)
                ->first();

            if (!$baniUser || $baniUser->role !== 'ADMIN') {
                if ($user->role !== 'SUPER_ADMIN') {
                    return response()->json(['error' => 'Hanya admin yang bisa menghapus'], 403);
                }
            }

            Member::destroy($memberId);

            ActivityLog::create([
                'user_id' => $user->id,
                'bani_id' => $member->bani_id,
                'action' => 'DELETE',
                'entity_type' => 'MEMBER',
                'entity_id' => $memberId,
                'description' => "Menghapus anggota \"{$member->full_name}\"",
            ]);

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            \Log::error('Delete member error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }
}
