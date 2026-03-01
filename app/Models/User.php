<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Authenticatable
{
    use HasFactory, HasUuids, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'status',
        'avatar',
        'tier_id',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }

    public function tier(): BelongsTo
    {
        return $this->belongsTo(UserTier::class, 'tier_id');
    }

    public function createdBanis(): HasMany
    {
        return $this->hasMany(Bani::class, 'created_by_id');
    }

    public function baniUsers(): HasMany
    {
        return $this->hasMany(BaniUser::class, 'user_id');
    }

    public function addedMembers(): HasMany
    {
        return $this->hasMany(Member::class, 'added_by_id');
    }

    public function activityLogs(): HasMany
    {
        return $this->hasMany(ActivityLog::class, 'user_id');
    }

    public function isSuperAdmin(): bool
    {
        return $this->role === 'SUPER_ADMIN';
    }

    public function isAdmin(): bool
    {
        return in_array($this->role, ['SUPER_ADMIN', 'ADMIN']);
    }

    public function isApproved(): bool
    {
        return $this->status === 'APPROVED';
    }
}
