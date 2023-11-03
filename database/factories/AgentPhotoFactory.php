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
            'property_id' => Agent::factory(), // Default value. Ideally, this should be dynamically set based on available Property IDs.
            'photo_url' => $this->faker->imageUrl(),
            'update_count' => 0,
        ];
    }
}
