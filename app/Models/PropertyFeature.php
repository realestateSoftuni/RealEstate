<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyFeature extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'feature_name',
        'update_count',
    ];

    public function properties()
    {
        return $this->belongsTo(Property::class);
    }

    protected static function booted()
    {
        static::saving(function ($propertyFeature) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($propertyFeature->isDirty() && !$propertyFeature->isDirty('update_count')) {
                $propertyFeature->update_count += 1;
            }
        });
    }
}
