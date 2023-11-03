<?php

namespace Database\Factories;

use App\Models\PropertyFeature;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyFeatureFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PropertyFeature::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'feature_name' => $this->faker->word,
            'update_count' => 0, // Defaulting 'n' to 0 initially
        ];
    }
}
