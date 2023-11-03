<?php

namespace Database\Factories;

use App\Models\Property;
use App\Models\PropertyViewings;
use App\Models\Customer;
use App\Models\Agent;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyViewingsFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PropertyViewings::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'property_id' => Property::factory(),  // Create a new Property
            'customer_id' => Customer::factory(),      // Create a new Customer
            'agent_id' => Agent::factory(),        // Create a new Agent
            'scheduled_time' => $this->faker->dateTimeBetween('now', '+1 year'),  // Schedule a time in the future
            'update_count' => $this->faker->randomDigit,  // Random update count
            'status' => $this->faker->randomElement(['scheduled', 'completed', 'cancelled']),  // Random status
        ];
    }
}
