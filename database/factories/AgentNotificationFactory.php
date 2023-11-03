<?php

namespace Database\Factories;

use App\Models\Agent;
use App\Models\AgentNotification;
use Illuminate\Database\Eloquent\Factories\Factory;

class AgentNotificationFactory extends Factory
{
    protected $model = AgentNotification::class;

    public function definition()
    {
        return [
            'agent_id' => Agent::factory(), // Assuming you have an Agent factory
            'title' => $this->faker->sentence,
            'message' => $this->faker->paragraph,
            'is_read' => $this->faker->boolean,
            'update_count' => 0
        ];
    }
}
