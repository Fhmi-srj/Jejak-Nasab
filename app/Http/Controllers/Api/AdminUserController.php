<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\User;
use App\Models\UserTier;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminUserController extends Controller
{
    // GET /api/admin/users
    public function index(Request $request): JsonResponse
    {
        try {
            $users = User::select('id', 'name', 'email', 'role', 'status', 'avatar', 'tier_id', 'created_at')
                ->with(['tier:id,name,color,max_banis,can_generate_pdf,can_generate_image'])
                ->withCount(['baniUsers', 'createdBanis'])
                ->orderBy('created_at', 'desc')
                ->get();

            return response()->json($users);
        } catch (\Exception $e) {
            \Log::error('Get users error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // POST /api/admin/users
    public function store(Request $request): JsonResponse
    {
        try {
            $user = $request->user();
            $data = $request->all();

            if (empty($data['name']) || empty($data['email']) || empty($data['password'])) {
                return response()->json(['error' => 'Nama, email, dan password wajib diisi'], 400);
            }

            if (strlen($data['password']) < 6) {
                return response()->json(['error' => 'Password minimal 6 karakter'], 400);
            }

            $existing = User::where('email', $data['email'])->first();
            if ($existing) {
                return response()->json(['error' => 'Email sudah terdaftar'], 400);
            }

            $assignTierId = $data['tierId'] ?? null;
            if (!$assignTierId) {
                $defaultTier = UserTier::where('is_default', true)->first();
                if ($defaultTier) $assignTierId = $defaultTier->id;
            }

            $newUser = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => $data['password'],
                'role' => $data['userRole'] ?? 'USER',
                'status' => 'APPROVED',
                'tier_id' => $assignTierId,
            ]);

            ActivityLog::create([
                'user_id' => $user->id,
                'action' => 'CREATE',
                'entity_type' => 'USER',
                'entity_id' => $newUser->id,
                'description' => "Menambahkan pengguna baru \"{$newUser->name}\"",
            ]);

            return response()->json([
                'id' => $newUser->id,
                'name' => $newUser->name,
                'email' => $newUser->email,
                'role' => $newUser->role,
                'status' => $newUser->status,
                'tier_id' => $newUser->tier_id,
            ], 201);
        } catch (\Exception $e) {
            \Log::error('Create user error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // PATCH /api/admin/users
    public function update(Request $request): JsonResponse
    {
        try {
            $user = $request->user();
            $data = $request->all();

            if (empty($data['userId'])) {
                return response()->json(['error' => 'userId is required'], 400);
            }

            if ($data['userId'] === $user->id) {
                return response()->json(['error' => 'Tidak bisa mengubah akun sendiri'], 400);
            }

            $updateData = [];
            if (!empty($data['status'])) $updateData['status'] = $data['status'];
            if (!empty($data['userRole'])) $updateData['role'] = $data['userRole'];
            if (array_key_exists('tierId', $data)) $updateData['tier_id'] = $data['tierId'] ?: null;

            $updatedUser = User::findOrFail($data['userId']);
            $updatedUser->update($updateData);
            $updatedUser->load('tier:id,name,color');

            ActivityLog::create([
                'user_id' => $user->id,
                'action' => 'UPDATE',
                'entity_type' => 'USER',
                'entity_id' => $data['userId'],
                'description' => "Mengubah pengguna \"{$updatedUser->name}\"",
                'new_values' => $updateData,
            ]);

            return response()->json([
                'id' => $updatedUser->id,
                'name' => $updatedUser->name,
                'email' => $updatedUser->email,
                'role' => $updatedUser->role,
                'status' => $updatedUser->status,
                'tier_id' => $updatedUser->tier_id,
                'tier' => $updatedUser->tier,
            ]);
        } catch (\Exception $e) {
            \Log::error('Update user error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }
}
