<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Traits\CamelCaseSerializable;

class Marriage extends Model
{
    use HasUuids, CamelCaseSerializable;

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
}
