<?php

namespace Database\Factories;

use App\Models\Property;
use App\Models\PropertyPhoto;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyPhotoFactory extends Factory
{
    protected $model = PropertyPhoto::class;

    public function definition()
    {
        return [
            'property_id' => Property::factory(), // Default value. Ideally, this should be dynamically set based on available Property IDs.
            'photo_url' => $this->faker->imageUrl(),
            'update_count' => 0,
        ];
    }
}
