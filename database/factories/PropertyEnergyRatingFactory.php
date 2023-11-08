<?php

// database/factories/EnergyRatingFactory.php

namespace Database\Factories;

use App\Models\PropertyEnergyRating;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyEnergyRatingFactory extends Factory
{
    protected $model = PropertyEnergyRating::class;

    public function definition()
    {
        return [

            'rating_value' => $this->faker->randomElement(['A', 'B', 'C', 'D', 'E', 'F', 'G']),
            'update_count' => 0
        ];
    }
}
