<?php

use App\Http\Controllers\AdminPageController;
use App\Http\Controllers\BaniPageController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TreePageController;
use App\Http\Controllers\Api\AdminTierController;
use App\Http\Controllers\Api\AdminUserController;
use App\Http\Controllers\Api\BaniController;
use App\Http\Controllers\Api\MarriageController;
use App\Http\Controllers\Api\MemberController;
use App\Http\Controllers\Api\UploadController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ─── Public Routes ───
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

// Public tree view
Route::get('/tree/{id}', [TreePageController::class, 'show'])->name('tree.show');

// ─── Auth Protected Routes ───
Route::middleware(['auth', 'approved'])->group(function () {

    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard/logs', [DashboardController::class, 'logs'])->name('dashboard.logs');

    // Bani Pages
    Route::get('/dashboard/bani', [BaniPageController::class, 'index'])->name('bani.index');
    Route::get('/dashboard/bani/create', [BaniPageController::class, 'create'])->name('bani.create');
    Route::get('/dashboard/bani/{id}', [BaniPageController::class, 'show'])->name('bani.show');
    Route::get('/dashboard/bani/{id}/tree', [BaniPageController::class, 'tree'])->name('bani.tree');

    // Member Pages
    Route::get('/dashboard/bani/{id}/members/add', [BaniPageController::class, 'addMember'])->name('member.add');
    Route::get('/dashboard/bani/{id}/members/{memberId}', [BaniPageController::class, 'showMember'])->name('member.show');
    Route::get('/dashboard/bani/{id}/members/{memberId}/edit', [BaniPageController::class, 'editMember'])->name('member.edit');

    // Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // ─── API Routes ───
    Route::prefix('api')->group(function () {
        // Banis
        Route::get('/banis', [BaniController::class, 'index']);
        Route::post('/banis', [BaniController::class, 'store']);
        Route::delete('/banis/{id}', [BaniController::class, 'destroy']);
        Route::get('/banis/{id}/settings', [BaniController::class, 'settings']);
        Route::patch('/banis/{id}/settings', [BaniController::class, 'updateSettings']);

        // Members
        Route::get('/members', [MemberController::class, 'index']);
        Route::post('/members', [MemberController::class, 'store']);
        Route::get('/members/{memberId}', [MemberController::class, 'show']);
        Route::patch('/members/{memberId}', [MemberController::class, 'update']);
        Route::delete('/members/{memberId}', [MemberController::class, 'destroy']);

        // Marriages
        Route::post('/marriages', [MarriageController::class, 'store']);
        Route::delete('/marriages/{marriageId}', [MarriageController::class, 'destroy']);

        // Upload
        Route::post('/upload', [UploadController::class, 'store']);

        // Admin routes
        Route::middleware('admin')->prefix('admin')->group(function () {
            Route::get('/users', [AdminUserController::class, 'index']);
            Route::post('/users', [AdminUserController::class, 'store']);
            Route::patch('/users', [AdminUserController::class, 'update']);

            Route::get('/tiers', [AdminTierController::class, 'index']);
            Route::post('/tiers', [AdminTierController::class, 'store']);
            Route::patch('/tiers', [AdminTierController::class, 'update']);
            Route::delete('/tiers', [AdminTierController::class, 'destroy']);
        });
    });

    // ─── Admin Pages ───
    Route::middleware('admin')->prefix('admin')->group(function () {
        Route::get('/dashboard', [AdminPageController::class, 'dashboard'])->name('admin.dashboard');
        Route::get('/users', [AdminPageController::class, 'users'])->name('admin.users');
        Route::get('/banis', [AdminPageController::class, 'banis'])->name('admin.banis');
    });
});

require __DIR__.'/auth.php';
