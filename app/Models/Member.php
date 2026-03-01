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

    /**
     * Convert snake_case keys to camelCase for JSON serialization.
     * The frontend expects camelCase (from the original Prisma/Next.js API).
     */
    public function toArray(): array
    {
        $array = parent::toArray();
        $camelArray = [];

        foreach ($array as $key => $value) {
            $camelKey = lcfirst(str_replace('_', '', ucwords($key, '_')));
            // Recursively convert nested arrays/relations
            if (is_array($value)) {
                $camelArray[$camelKey] = $this->convertKeysToCamel($value);
            } else {
                $camelArray[$camelKey] = $value;
            }
        }

        return $camelArray;
    }

    private function convertKeysToCamel(array $array): array
    {
        $result = [];
        foreach ($array as $key => $value) {
            if (is_string($key)) {
                $camelKey = lcfirst(str_replace('_', '', ucwords($key, '_')));
            } else {
                $camelKey = $key;
            }
            if (is_array($value)) {
                $result[$camelKey] = $this->convertKeysToCamel($value);
            } else {
                $result[$camelKey] = $value;
            }
        }
        return $result;
    }
}
