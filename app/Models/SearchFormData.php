<?php

// app/Models/SearchFormData.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SearchFormData extends Model
{
    protected $fillable = [
        'searchWord',
        'status',
        'type',
        'location',
        'bedrooms',
        'bathrooms',
        'WiFi',
        // ... other properties
        'minArea',
        'maxArea',
        'minPrice',
        'maxPrice',
    ];
}
