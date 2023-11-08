<?php

namespace Database\Factories;

use App\Models\Location;
use Illuminate\Database\Eloquent\Factories\Factory;

class LocationFactory extends Factory
{
    protected $model = Location::class;

    public function definition()
    {
        return [
            'location_name' => $this->faker->city,
            'zip_code' => $this->faker->postcode,
            'parent_location_id' => null, // By default it's null, you can set it dynamically if required.
            'update_count' => 0,
        ];
    }
}
