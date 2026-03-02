<?php

namespace App\Http\Controllers;

use App\Models\ActivityLog;
use App\Models\Bani;
use App\Models\BaniUser;
use App\Models\Member;
use App\Models\User;
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
        $isAdmin = in_array($user->role, ['SUPER_ADMIN', 'ADMIN']);

        $recentLogs = ActivityLog::whereIn('bani_id', $baniIds)
            ->with(['user:id,name,avatar', 'bani:id,name'])
            ->orderBy('created_at', 'desc')
            ->limit($isAdmin ? 10 : 5)
            ->get();

        $data = [
            'user' => $user,
            'banis' => $banis,
            'totalBanis' => $totalBanis,
            'totalMembers' => $totalMembers,
            'recentLogs' => $recentLogs,
        ];

        // Admin-only data
        if ($isAdmin) {
            $data['adminStats'] = [
                'totalUsers' => User::count(),
                'pendingCount' => User::where('status', 'PENDING')->count(),
                'totalBanis' => Bani::count(),
                'totalMembersGlobal' => Member::count(),
            ];

            $data['pendingUsers'] = User::where('status', 'PENDING')
                ->orderBy('created_at', 'desc')
                ->take(5)
                ->get(['id', 'name', 'email', 'created_at']);
        }

        return Inertia::render('Dashboard/Index', $data);
    }

    public function logs(Request $request): Response
    {
        $user = $request->user();
        $isAdmin = in_array($user->role, ['SUPER_ADMIN', 'ADMIN']);

        if (!$isAdmin) {
            return redirect()->route('dashboard');
        }

        $page = max(1, (int) $request->query('page', 1));
        $actionFilter = $request->query('action', '');
        $pageSize = 20;

        $query = ActivityLog::query()
            ->with(['user:id,name,avatar', 'bani:id,name'])
            ->orderBy('created_at', 'desc');

        if ($actionFilter) {
            $query->where('action', $actionFilter);
        }

        $totalCount = $query->count();
        $totalPages = max(1, ceil($totalCount / $pageSize));

        $logs = $query->skip(($page - 1) * $pageSize)
            ->take($pageSize)
            ->get();

        // Count by action type for filter badges
        $actionCounts = ActivityLog::selectRaw('action, count(*) as cnt')
            ->groupBy('action')
            ->pluck('cnt', 'action')
            ->toArray();

        return Inertia::render('Dashboard/Logs/Index', [
            'logs' => $logs,
            'totalCount' => $totalCount,
            'page' => $page,
            'totalPages' => $totalPages,
            'actionFilter' => $actionFilter,
            'actionCounts' => $actionCounts,
        ]);
    }
}
