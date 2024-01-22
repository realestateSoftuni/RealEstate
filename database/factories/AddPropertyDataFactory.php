<?php

namespace Database\Factories;

use App\Models\AddPropertyData;
use Illuminate\Database\Eloquent\Factories\Factory;

class AddPropertyDataFactory extends Factory
{
    protected $model = AddPropertyData::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'status' => $this->faker->randomElement(['Rent', 'Sale']),
            'type' => $this->faker->randomElement(['House', 'Apartment', 'Commercial', 'Lot', 'Garage']),
            'rooms' => $this->faker->numberBetween(1, 10),
            'price' => $this->faker->randomFloat(2, 1000, 100000),
            'area' => $this->faker->randomFloat(2, 50, 500),
            'build' => $this->faker->year,
            'address' => $this->faker->address,
            'city' => $this->faker->city,
            'name' => $this->faker->name,
            'username' => $this->faker->userName,
            'email' => $this->faker->unique()->safeEmail,
            // ... other fields
        ];
    }
}
