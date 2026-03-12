<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserTier;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AdminTierController extends Controller
{
    // GET /api/admin/tiers
    public function index(): JsonResponse
    {
        try {
            $tiers = UserTier::withCount('users')
                ->orderBy('created_at', 'asc')
                ->get();

            return response()->json($tiers);
        } catch (\Exception $e) {
            \Log::error('Get tiers error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // POST /api/admin/tiers
    public function store(Request $request): JsonResponse
    {
        try {
            $data = $request->all();

            if (empty($data['name'])) {
                return response()->json(['error' => 'Nama kelas wajib diisi'], 400);
            }

            if (!empty($data['isDefault'])) {
                UserTier::where('is_default', true)->update(['is_default' => false]);
            }

            $tier = UserTier::create([
                'name' => $data['name'],
                'color' => $data['color'] ?? '#6B7280',
                'max_banis' => $data['maxBanis'] ?? 1,
                'max_generations' => $data['maxGenerations'] ?? 10,
                'can_generate_pdf' => $data['canGeneratePdf'] ?? false,
                'can_generate_image' => $data['canGenerateImage'] ?? false,
                'is_default' => $data['isDefault'] ?? false,
            ]);

            return response()->json($tier, 201);
        } catch (\Illuminate\Database\QueryException $e) {
            if ($e->getCode() === '23000') {
                return response()->json(['error' => 'Nama kelas sudah ada'], 400);
            }
            \Log::error('Create tier error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // PATCH /api/admin/tiers
    public function update(Request $request): JsonResponse
    {
        try {
            $data = $request->all();

            if (empty($data['id'])) {
                return response()->json(['error' => 'ID wajib diisi'], 400);
            }

            if (!empty($data['isDefault'])) {
                UserTier::where('is_default', true)
                    ->where('id', '!=', $data['id'])
                    ->update(['is_default' => false]);
            }

            $updateData = [];
            $mapping = [
                'name' => 'name',
                'color' => 'color',
                'maxBanis' => 'max_banis',
                'maxGenerations' => 'max_generations',
                'canGeneratePdf' => 'can_generate_pdf',
                'canGenerateImage' => 'can_generate_image',
                'isDefault' => 'is_default',
            ];

            foreach ($mapping as $camel => $snake) {
                if (array_key_exists($camel, $data)) {
                    $updateData[$snake] = $data[$camel];
                }
            }

            $tier = UserTier::findOrFail($data['id']);
            $tier->update($updateData);

            return response()->json($tier->fresh());
        } catch (\Illuminate\Database\QueryException $e) {
            if ($e->getCode() === '23000') {
                return response()->json(['error' => 'Nama kelas sudah ada'], 400);
            }
            \Log::error('Update tier error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // DELETE /api/admin/tiers?id=xxx
    public function destroy(Request $request): JsonResponse
    {
        try {
            $id = $request->query('id');
            if (!$id) {
                return response()->json(['error' => 'ID wajib diisi'], 400);
            }

            User::where('tier_id', $id)->update(['tier_id' => null]);
            UserTier::destroy($id);

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            \Log::error('Delete tier error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }
}
