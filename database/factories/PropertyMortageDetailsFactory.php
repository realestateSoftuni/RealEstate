<?php

namespace Database\Factories;

use App\Models\Property;
use App\Models\PropertyMortageDetails;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyMortageDetailsFactory extends Factory
{
    protected $model = PropertyMortageDetails::class;

    public function definition()
    {
        return [
            'property_id' => Property::factory(),
            'lender_name' => $this->faker->company,
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'amount' => $this->faker->randomFloat(2, 100000, 1000000),
            'outstanding_amount' => $this->faker->randomFloat(2, 50000, 500000),
            'monthly_payment' => $this->faker->randomFloat(2, 1000, 10000),
            'update_count' => $this->faker->randomNumber(),
        ];
    }
}
