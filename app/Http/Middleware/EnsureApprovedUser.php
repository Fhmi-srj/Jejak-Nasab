<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureApprovedUser
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if (!$user) {
            if ($request->expectsJson()) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
            return redirect()->route('login');
        }

        if ($user->status === 'PENDING') {
            if ($request->expectsJson()) {
                return response()->json(['error' => 'Akun Anda masih menunggu persetujuan admin'], 403);
            }
            auth()->logout();
            return redirect()->route('login')->withErrors([
                'email' => 'Akun Anda masih menunggu persetujuan admin.',
            ]);
        }

        if ($user->status === 'SUSPENDED') {
            if ($request->expectsJson()) {
                return response()->json(['error' => 'Akun Anda telah ditangguhkan'], 403);
            }
            auth()->logout();
            return redirect()->route('login')->withErrors([
                'email' => 'Akun Anda telah ditangguhkan.',
            ]);
        }

        return $next($request);
    }
}
