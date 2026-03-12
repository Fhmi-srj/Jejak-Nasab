<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use App\Models\Bani;
use App\Models\BaniUser;
use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class BaniPageController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Dashboard/Bani/Index');
    }

    public function create(): Response
    {
        return Inertia::render('Dashboard/Bani/Create');
    }

    public function show(Request $request, string $id): Response
    {
        $user = $request->user();

        $bani = Bani::with([
            'createdBy:id,name',
            'rootMember:id,full_name',
        ])->withCount('members')->findOrFail($id);

        $baniUser = BaniUser::where('bani_id', $id)
            ->where('user_id', $user->id)
            ->first();

        $isAdmin = $user->role === 'SUPER_ADMIN';
        if (!$baniUser && !$isAdmin) {
            abort(403);
        }

        $bani->userRole = $baniUser?->role ?? ($isAdmin ? 'ADMIN' : null);

        return Inertia::render('Dashboard/Bani/Show', [
            'bani' => $bani,
            'userRole' => $bani->userRole,
        ]);
    }

    public function tree(Request $request, string $id): Response
    {
        $user = $request->user();

        $bani = Bani::select('id', 'name', 'root_member_id', 'tree_orientation', 'card_theme')
            ->findOrFail($id);

        $baniUser = BaniUser::where('bani_id', $id)
            ->where('user_id', $user->id)
            ->first();

        $isAdmin = $user->role === 'SUPER_ADMIN';
        if (!$baniUser && !$isAdmin) {
            abort(403);
        }

        return Inertia::render('Dashboard/Bani/Tree', [
            'bani' => $bani,
            'userRole' => $baniUser?->role ?? ($isAdmin ? 'ADMIN' : null),
        ]);
    }

    // Member pages
    public function addMember(Request $request, string $id): Response
    {
        return Inertia::render('Dashboard/Member/Create', [
            'baniId' => $id,
        ]);
    }

    public function showMember(Request $request, string $id, string $memberId): Response
    {
        return Inertia::render('Dashboard/Member/Show', [
            'baniId' => $id,
            'memberId' => $memberId,
        ]);
    }

    public function editMember(Request $request, string $id, string $memberId): Response
    {
        return Inertia::render('Dashboard/Member/Edit', [
            'baniId' => $id,
            'memberId' => $memberId,
        ]);
    }
}
