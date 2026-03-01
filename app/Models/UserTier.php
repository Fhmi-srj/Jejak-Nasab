<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class UserTier extends Model
{
    use HasUuids;

    protected $table = 'user_tiers';
    public $timestamps = false;

    protected $fillable = [
        'name',
        'color',
        'max_banis',
        'max_generations',
        'can_generate_pdf',
        'can_generate_image',
        'is_default',
    ];

    protected function casts(): array
    {
        return [
            'max_banis' => 'integer',
            'max_generations' => 'integer',
            'can_generate_pdf' => 'boolean',
            'can_generate_image' => 'boolean',
            'is_default' => 'boolean',
            'created_at' => 'datetime',
        ];
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'tier_id');
    }
}
