<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use App\Models\Bani;
use App\Models\BaniUser;
use App\Models\Member;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $user = $request->user();
        $user->load('tier');

        // Get user's banis
        $baniUsers = BaniUser::where('user_id', $user->id)
            ->with(['bani' => function ($q) {
                $q->withCount('members')
                  ->with('createdBy:id,name');
            }])
            ->orderBy('joined_at', 'desc')
            ->get();

        $banis = $baniUsers->map(function ($bu) {
            $bani = $bu->bani;
            $bani->userRole = $bu->role;
            return $bani;
        });

        // Stats
        $totalBanis = $banis->count();
        $totalMembers = $banis->sum('members_count');

        // Recent activity logs
        $baniIds = $banis->pluck('id')->toArray();
        $recentLogs = ActivityLog::whereIn('bani_id', $baniIds)
            ->with('user:id,name,avatar')
            ->orderBy('created_at', 'desc')
            ->limit(10)
            ->get();

        return Inertia::render('Dashboard/Index', [
            'user' => $user,
            'banis' => $banis,
            'totalBanis' => $totalBanis,
            'totalMembers' => $totalMembers,
            'recentLogs' => $recentLogs,
        ]);
    }

    public function logs(Request $request): Response
    {
        $user = $request->user();

        $baniIds = BaniUser::where('user_id', $user->id)->pluck('bani_id')->toArray();

        $logs = ActivityLog::whereIn('bani_id', $baniIds)
            ->with('user:id,name,avatar')
            ->orderBy('created_at', 'desc')
            ->paginate(50);

        return Inertia::render('Dashboard/Logs/Index', [
            'logs' => $logs,
        ]);
    }
}
