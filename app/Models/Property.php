<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Property extends Model
{
    use HasFactory, SoftDeletes;

    const STATUS_SALE = 'sale';
    const STATUS_RENT = 'rent';

    const TYPE_HOUSE = 'house';
    const TYPE_APARTMENT = 'apartment';
    const TYPE_COMMERCIAL = 'commercial';
    const TYPE_LOT = 'lot';
    const TYPE_GARAGE = 'garage';

    const CONSTRUCTION_BRICK = 'brick';
    const CONSTRUCTION_GANGED = 'ganged_wall_form';
    const CONSTRUCTION_PREFABRICATED = 'prefabricated';
    const CONSTRUCTION_PANEL = 'panel_build';

    const HEATING_GAS = 'gas';
    const HEATING_AIR_CONDITIONING = 'air_conditioning';
    const HEATING_CENTRAL = 'central_heating';

    protected $fillable = [
        'title',
        'description',
        'status',
        'property_type',
        'rooms',
        'price',
        'square_feet',
        'build',
        'address',
        'city',
        'state',
        'country',
        'latitude',
        'longitude',
        'floor',
        'construction',
        'bedrooms',
        'bathrooms',
        'heating',
        'name',
        'username',
        'email',
        'phone',
        'date_listed',
        'update_count',
        'likedBy',
    ];
//
//    public function location()
//    {
//        return $this->belongsTo(Location::class);
//    }

    public function user()
    {
        return $this->belongsTo(User::class);
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
        return $this->hasOne(PropertyMortagageDetails::class);
    }

    public function property_viewings()
    {
        return $this->hasMany(PropertyViewings::class);
    }

    public function property_energy_rating()
    {
        return $this->belongsTo(PropertyEnergyRating::class);
    }

    public function property_inquiries()
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
