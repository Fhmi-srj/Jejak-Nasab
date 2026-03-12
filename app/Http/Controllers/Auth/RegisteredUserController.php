<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserTier;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', 'min:6'],
        ]);

        // Check if this is the first user (make them SUPER_ADMIN & auto-approve)
        $isFirstUser = User::count() === 0;

        // Find default tier
        $defaultTier = UserTier::where('is_default', true)->first();

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'role' => $isFirstUser ? 'SUPER_ADMIN' : 'USER',
            'status' => $isFirstUser ? 'APPROVED' : 'PENDING',
            'tier_id' => $defaultTier?->id,
        ]);

        event(new Registered($user));

        if ($isFirstUser) {
            Auth::login($user);
            return redirect(route('dashboard', absolute: false));
        }

        // Non-first users: redirect to login with a message
        return redirect(route('login', absolute: false))->with('status', 'Registrasi berhasil! Akun Anda menunggu persetujuan admin.');
    }
}
