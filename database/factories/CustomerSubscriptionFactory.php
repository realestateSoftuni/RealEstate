<?php

// database/factories/UserSubscriptionFactory.php

namespace Database\Factories;

use App\Models\CustomerSubscription;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerSubscriptionFactory extends Factory
{
    protected $model = CustomerSubscription::class;

    public function definition()
    {
        return [
            'customer_id' => \App\Models\Customer::factory(),
            'location_id' => \App\Models\Location::factory(), // Assume you have a Location model and factory
            'min_price' => $this->faker->numberBetween(100000, 300000),
            'max_price' => $this->faker->numberBetween(300001, 600000),
            'min_square_feet' => $this->faker->numberBetween(500, 1000),
            'max_square_feet' => $this->faker->numberBetween(1001, 2000),
            'update_count' => 0
            // other criteria fields
        ];
    }
}
