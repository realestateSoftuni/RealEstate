<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Property extends Model
{
    use HasFactory, SoftDeletes;

    const STATUS_AVAILABLE = 'available';
    const STATUS_SOLD = 'sold';
    const STATUS_RENTED = 'rented';

    const TYPE_HOUSE = 'house';
    const TYPE_APARTMENT = 'apartment';
    const TYPE_LAND = 'land';

    protected $fillable = [
        'address',
        'location_id',
        'price',
        'bedrooms',
        'square_feet',
        'description',
        'status',
        'property_type',
        'date_listed',
        'update_count'
    ];

    public function location()
    {
        return $this->belongsTo(Location::class);
    }

    public function agent()
    {
        return $this->belongsTo(Agent::class);
    }

    public function property_features()  // Adjusted the relationship to many-to-many
    {
        return $this->belongsToMany(PropertyFeature::class);
    }

    public function property_reviews()
    {
        return $this->hasMany(PropertyReview::class);
    }

    public function property_photos()
    {
        return $this->hasMany(PropertyPhoto::class);
    }

    public function property_mortgage_details()
    {
        return $this->hasOne(PropertyMortageDetails::class);
    }

    public function property_viewings()
    {
        return $this->hasMany(PropertyViewings::class);
    }

    public function property_energy_rating()
    {
        return $this->belongsTo(PropertyEnergyRating::class);
    }

    public function inquiries()
    {
        return $this->hasMany(PropertyInquiry::class);
    }

    protected static function booted()
    {
        static::saving(function ($property) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($property->isDirty() && !$property->isDirty('update_count')) {  // Check if any field other than 'update_count' is being updated
                $property->update_count += 1;
            }
        });
    }
}
