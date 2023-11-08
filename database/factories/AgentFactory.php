<?php

namespace Database\Factories;

use App\Models\Agent;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Agent>
 */

class AgentFactory extends Factory
{
    protected $model = Agent::class;

    public function definition()
    {
        return [
            // Assuming each agent must be associated with a unique user
            'user_id' => User::factory(),
            'years_of_experience' => $this->faker->numberBetween(1, 20),
            'total_properties_sold' => $this->faker->numberBetween(1, 500),
            'average_rating' => $this->faker->randomFloat(2, 1, 5), // Random float number between 1 and 5
            // Assuming 'n' is the 'update_count', it's renamed for better understanding.
            // Removed the random assignment to 'update_count' to ensure consistency across your application,
            // it's usually controlled by model events, not randomly assigned.
        ];
    }
}
