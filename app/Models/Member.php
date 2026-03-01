<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Member extends Model
{
    use HasUuids;

    protected $table = 'members';

    protected $fillable = [
        'bani_id',
        'full_name',
        'nickname',
        'gender',
        'birth_date',
        'birth_place',
        'death_date',
        'is_alive',
        'address',
        'city',
        'phone_whatsapp',
        'social_media',
        'photo',
        'bio',
        'father_id',
        'mother_id',
        'generation',
        'added_by_id',
    ];

    protected function casts(): array
    {
        return [
            'birth_date' => 'date',
            'death_date' => 'date',
            'is_alive' => 'boolean',
            'social_media' => 'json',
            'generation' => 'integer',
        ];
    }

    public function bani(): BelongsTo
    {
        return $this->belongsTo(Bani::class, 'bani_id');
    }

    public function father(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'father_id');
    }

    public function mother(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'mother_id');
    }

    public function childrenAsFather(): HasMany
    {
        return $this->hasMany(Member::class, 'father_id');
    }

    public function childrenAsMother(): HasMany
    {
        return $this->hasMany(Member::class, 'mother_id');
    }

    public function addedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'added_by_id');
    }

    public function marriagesAsHusband(): HasMany
    {
        return $this->hasMany(Marriage::class, 'husband_id');
    }

    public function marriagesAsWife(): HasMany
    {
        return $this->hasMany(Marriage::class, 'wife_id');
    }

    public function rootOfBani(): HasOne
    {
        return $this->hasOne(Bani::class, 'root_member_id');
    }
}
