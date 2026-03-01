<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Marriage extends Model
{
    use HasUuids;

    protected $table = 'marriages';
    public $timestamps = false;

    protected $fillable = [
        'husband_id',
        'wife_id',
        'marriage_date',
        'divorce_date',
        'is_active',
        'marriage_order',
    ];

    protected function casts(): array
    {
        return [
            'marriage_date' => 'date',
            'divorce_date' => 'date',
            'is_active' => 'boolean',
            'marriage_order' => 'integer',
            'created_at' => 'datetime',
        ];
    }

    public function husband(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'husband_id');
    }

    public function wife(): BelongsTo
    {
        return $this->belongsTo(Member::class, 'wife_id');
    }

    public function toArray(): array
    {
        $array = parent::toArray();
        $camelArray = [];

        foreach ($array as $key => $value) {
            $camelKey = is_string($key) ? lcfirst(str_replace('_', '', ucwords($key, '_'))) : $key;
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
            $camelKey = is_string($key) ? lcfirst(str_replace('_', '', ucwords($key, '_'))) : $key;
            if (is_array($value)) {
                $result[$camelKey] = $this->convertKeysToCamel($value);
            } else {
                $result[$camelKey] = $value;
            }
        }
        return $result;
    }
}
