<?php

namespace Database\Factories;

use App\Models\Property;
use App\Models\User;
use App\Models\PropertyInquiry;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyInquiryFactory extends Factory
{
    protected $model = PropertyInquiry::class;

    public function definition()
    {
        return [
            'property_id' => Property::factory(),
            'customer_id' => User::factory(),
            'inquiry_date' => $this->faker->date(),
            'message' => $this->faker->paragraph,
            'update_count' => $this->faker->randomNumber(),
        ];
    }
}
