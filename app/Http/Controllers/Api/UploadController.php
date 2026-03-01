<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\BaniUser;
use App\Models\Member;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    // POST /api/upload
    public function store(Request $request): JsonResponse
    {
        try {
            $user = $request->user();
            $file = $request->file('file');
            $memberId = $request->input('memberId');

            if (!$file || !$memberId) {
                return response()->json(['error' => 'File dan memberId harus diisi'], 400);
            }

            // Validate file type
            $validTypes = ['image/jpeg', 'image/png', 'image/webp'];
            if (!in_array($file->getMimeType(), $validTypes)) {
                return response()->json(['error' => 'Format file harus JPG, PNG, atau WebP'], 400);
            }

            // Validate file size (max 5MB)
            $maxSize = (int) env('MAX_FILE_SIZE', 5242880);
            if ($file->getSize() > $maxSize) {
                return response()->json(['error' => 'Ukuran file maksimal 5MB'], 400);
            }

            // Check member exists and user has access
            $member = Member::select('id', 'bani_id', 'full_name')->find($memberId);
            if (!$member) {
                return response()->json(['error' => 'Anggota tidak ditemukan'], 404);
            }

            $baniUser = BaniUser::where('bani_id', $member->bani_id)
                ->where('user_id', $user->id)
                ->first();

            if (!$baniUser || $baniUser->role === 'VIEWER') {
                return response()->json(['error' => 'Tidak memiliki akses'], 403);
            }

            // Generate unique filename
            $ext = $file->getClientOriginalExtension() ?: 'jpg';
            $filename = "{$memberId}-" . time() . ".{$ext}";

            // Store file
            $file->storeAs('uploads/members', $filename, 'public');

            // Update member photo
            $photoUrl = "/storage/uploads/members/{$filename}";
            $member->update(['photo' => $photoUrl]);

            // Log activity
            ActivityLog::create([
                'user_id' => $user->id,
                'bani_id' => $member->bani_id,
                'action' => 'UPDATE',
                'entity_type' => 'MEMBER',
                'entity_id' => $memberId,
                'description' => "Mengupload foto {$member->full_name}",
            ]);

            return response()->json(['url' => $photoUrl]);
        } catch (\Exception $e) {
            \Log::error('Upload error: ' . $e->getMessage());
            return response()->json(['error' => 'Gagal mengupload file'], 500);
        }
    }
}
