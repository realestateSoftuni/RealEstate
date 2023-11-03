<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyPhoto extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'photo_url',
        'update_count'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    protected static function booted()
    {
        static::saving(function ($photo) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($photo->isDirty() && !$photo->isDirty('update_count')) {
                $photo->update_count += 1;
            }
        });
    }
}
