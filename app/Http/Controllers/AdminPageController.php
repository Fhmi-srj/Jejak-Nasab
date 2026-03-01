<?php

namespace App\Http\Controllers;

use App\Models\Bani;
use App\Models\BaniUser;
use App\Models\Member;
use App\Models\User;
use App\Models\UserTier;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminPageController extends Controller
{
    public function dashboard(Request $request): Response
    {
        $stats = [
            'totalUsers' => User::count(),
            'pendingUsers' => User::where('status', 'PENDING')->count(),
            'totalBanis' => Bani::count(),
            'totalMembers' => Member::count(),
        ];

        return Inertia::render('Admin/Dashboard', [
            'stats' => $stats,
        ]);
    }

    public function users(Request $request): Response
    {
        return Inertia::render('Admin/Users');
    }

    public function banis(Request $request): Response
    {
        return Inertia::render('Admin/Banis');
    }
}
