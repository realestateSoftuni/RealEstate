<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Location extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'location_name',
        'zip_code',
        'parent_location_id',
        'update_count',
    ];
    protected static function booted()
    {
        static::saving(function ($location) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($location->isDirty() && !$location->isDirty('update_count')) {  // Check if any field other than 'update_count' is being updated
                $location->update_count += 1;
            }
        });
    }

    public function parentLocation()
    {
        return $this->belongsTo(Location::class, 'parent_location_id');
    }

    public function childLocations()
    {
        return $this->hasMany(Location::class, 'parent_location_id');
    }

    public function customers()
    {
        return $this->belongsToMany(Customer::class, 'customer_location');
    }
}
