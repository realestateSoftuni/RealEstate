<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyVideo extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'video_url',
        'update_count'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    protected static function booted()
    {
        static::saving(function ($video) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($video->isDirty() && !$video->isDirty('update_count')) {
                $video->update_count += 1;
            }
        });
    }
}

