<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyEnergyRating extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'rating_value',
        'update_count'
    ];

    public function properties()
    {
        return $this->hasMany(Property::class);
    }

    protected static function booted()
    {
        static::saving(function ($energyRating) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($energyRating->isDirty() && !$energyRating->isDirty('update_count')) {
                $energyRating->update_count += 1;
            }
        });
    }
}
