<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Traits\CamelCaseSerializable;

class Bani extends Model
{
    use HasUuids, CamelCaseSerializable;

    protected $table = 'banis';

    protected $fillable = [
        'name',
        'description',
        'cover_image',
        'tree_orientation',
        'is_public',
        'show_wa_public',
        'show_birth_public',
        'show_address_public',
        'show_socmed_public',
        'card_theme',
        'created_by_id',
        'root_member_id',
    ];

    protected function casts(): array
    {
        return [
            'is_public' => 'boolean',
            'show_wa_public' => 'boolean',
            'show_birth_public' => 'boolean',
            'show_address_public' => 'boolean',
            'show_socmed_public' => 'boolean',
        ];
    }

    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by_id');
    }

    public function rootMember(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'root_member_id');
    }

    public function baniUsers(): HasMany
    {
        return $this->hasMany(BaniUser::class, 'bani_id');
    }

    public function members(): HasMany
    {
        return $this->hasMany(Member::class, 'bani_id');
    }

    public function activityLogs(): HasMany
    {
        return $this->hasMany(ActivityLog::class, 'bani_id');
    }
}
