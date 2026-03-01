<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BaniUser extends Model
{
    use HasUuids;

    protected $table = 'bani_users';
    public $timestamps = false;

    protected $fillable = [
        'bani_id',
        'user_id',
        'role',
    ];

    protected function casts(): array
    {
        return [
            'joined_at' => 'datetime',
        ];
    }

    public function bani(): BelongsTo
    {
        return $this->belongsTo(Bani::class, 'bani_id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
