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

            $husband = Member::select('id', 'bani_id', 'generation', 'father_id', 'mother_id')->find($data['husbandId']);
            if (!$husband) {
                return response()->json(['error' => 'Member not found'], 404);
            }

            $wife = Member::select('id', 'bani_id', 'generation', 'father_id', 'mother_id')->find($data['wifeId']);
            if (!$wife) {
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

            // Sync spouse generation: spouse without parents should match partner's generation
            $husbandHasParent = $husband->father_id || $husband->mother_id;
            $wifeHasParent = $wife->father_id || $wife->mother_id;

            if (!$wifeHasParent && $husbandHasParent && $wife->generation !== $husband->generation) {
                $wife->generation = $husband->generation;
                $wife->save();
            } elseif (!$husbandHasParent && $wifeHasParent && $husband->generation !== $wife->generation) {
                $husband->generation = $wife->generation;
                $husband->save();
            } elseif (!$wifeHasParent && !$husbandHasParent) {
                // Both have no parents — sync to the higher generation
                $maxGen = max($husband->generation, $wife->generation);
                if ($wife->generation !== $maxGen) {
                    $wife->generation = $maxGen;
                    $wife->save();
                }
                if ($husband->generation !== $maxGen) {
                    $husband->generation = $maxGen;
                    $husband->save();
                }
            }

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
