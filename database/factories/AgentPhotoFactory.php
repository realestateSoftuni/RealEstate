<?php

namespace Database\Factories;

use App\Models\Agent;
use App\Models\AgentPhoto;
use Illuminate\Database\Eloquent\Factories\Factory;

class AgentPhotoFactory extends Factory
{
    protected $model = AgentPhoto::class;

    public function definition()
    {
        return [
            'agent_id' => Agent::factory(),
            'photo_url' => $this->faker->imageUrl(),
            'update_count' => 0,
        ];
    }
}
