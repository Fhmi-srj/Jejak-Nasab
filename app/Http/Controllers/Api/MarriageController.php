<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BaniUser;
use App\Models\Marriage;
use App\Models\Member;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class MarriageController extends Controller
{
    // POST /api/marriages
    public function store(Request $request): JsonResponse
    {
        try {
            $user = $request->user();
            $data = $request->all();

            if (empty($data['husbandId']) || empty($data['wifeId'])) {
                return response()->json(['error' => 'Husband and wife IDs are required'], 400);
            }

            $husband = Member::select('bani_id')->find($data['husbandId']);
            if (!$husband) {
                return response()->json(['error' => 'Member not found'], 404);
            }

            $baniUser = BaniUser::where('bani_id', $husband->bani_id)
                ->where('user_id', $user->id)
                ->first();

            if (!$baniUser || $baniUser->role === 'VIEWER') {
                return response()->json(['error' => 'Tidak memiliki akses edit'], 403);
            }

            $marriage = Marriage::create([
                'husband_id' => $data['husbandId'],
                'wife_id' => $data['wifeId'],
                'marriage_date' => !empty($data['marriageDate']) ? $data['marriageDate'] : null,
                'marriage_order' => $data['marriageOrder'] ?? 1,
            ]);

            return response()->json($marriage, 201);
        } catch (\Exception $e) {
            \Log::error('Create marriage error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }

    // DELETE /api/marriages/{marriageId}
    public function destroy(Request $request, string $marriageId): JsonResponse
    {
        try {
            $user = $request->user();

            $marriage = Marriage::with('husband:id,bani_id')->find($marriageId);
            if (!$marriage) {
                return response()->json(['error' => 'Pernikahan tidak ditemukan'], 404);
            }

            $baniUser = BaniUser::where('bani_id', $marriage->husband->bani_id)
                ->where('user_id', $user->id)
                ->first();

            if (!$baniUser || $baniUser->role === 'VIEWER') {
                return response()->json(['error' => 'Tidak memiliki akses edit'], 403);
            }

            Marriage::destroy($marriageId);

            return response()->json(['success' => true]);
        } catch (\Exception $e) {
            \Log::error('Delete marriage error: ' . $e->getMessage());
            return response()->json(['error' => 'Server error'], 500);
        }
    }
}
