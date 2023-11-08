<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    protected $model = Customer::class;

    public function definition()
    {
        return [
            'user_id' => User::factory(),
            'budget_min' => $this->faker->numberBetween(1000, 5000),
            'budget_max' => $this->faker->numberBetween(5000, 20000),
            'update_count' => $this->faker->randomDigit,
        ];
    }
}
