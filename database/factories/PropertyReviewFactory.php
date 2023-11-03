<?php

use App\Models\PropertyReview;
use App\Models\User;
use App\Models\Property;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyReviewFactory extends Factory
{
    protected $model = PropertyReview::class;

    public function definition()
    {
        return [
            'property_id' => Property::factory(),
            'user_id' => User::factory(),
            'rating' => $this->faker->numberBetween(1, 5),
            'review_text' => $this->faker->sentence,
            'review_date' => $this->faker->dateTime,
            'update_count' => 0
        ];
    }
}
