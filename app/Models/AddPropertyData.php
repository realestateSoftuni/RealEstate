<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AddPropertyData extends Model
{
    use HasFactory;

    protected $table = 'add_property_data';

    protected $fillable = [
        'title',
        'description',
        'status',
        'type',
        'rooms',
        'price',
        'area',
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
        'inConstruction',
        'garage',
        'swimmingPool',
        'furnished',
        'parking',
        'gym',
        'alarm',
        'windowCovering',
        'guard',
        'tv_wifi',
        'renovated',
        'yard',
        'userID',
        'name',
        'username',
        'email',
        'phone',
        'createdOn',
        'updatedOn',
        'deletedOn',
        'likedBy',
    ];

    protected $casts = [
        'inConstruction' => 'boolean',
        'garage' => 'boolean',
        'swimmingPool' => 'boolean',
        'furnished' => 'boolean',
        'parking' => 'boolean',
        'gym' => 'boolean',
        'alarm' => 'boolean',
        'windowCovering' => 'boolean',
        'guard' => 'boolean',
        'tv_wifi' => 'boolean',
        'renovated' => 'boolean',
        'yard' => 'boolean',
    ];

    // Add your relationships or additional methods as needed
}
