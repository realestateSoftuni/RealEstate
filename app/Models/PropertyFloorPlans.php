<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyFloorPlans extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'image_url',
        'name',
        'update_count'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    protected static function booted()
    {
        static::saving(function ($plan) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($plan->isDirty() && !$plan->isDirty('update_count')) {
                $plan->update_count += 1;
            }
        });
    }
}
