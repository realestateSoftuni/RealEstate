<?php

// database/factories/UserSearchHistoryFactory.php

namespace Database\Factories;

use App\Models\CustomerSearchHistory;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerSearchHistoryFactory extends Factory
{
    protected $model = CustomerSearchHistory::class;

    public function definition()
    {
        return [
            'customer_id' => \App\Models\Customer::factory(),
            'search_query' => json_encode([
                'keywords' => $this->faker->words(3, true),
                'location' => $this->faker->city,
                'min_price' => $this->faker->numberBetween(100000, 300000),
                'max_price' => $this->faker->numberBetween(300001, 600000),
                // add other search parameters here
            ]),
            'search_date' => $this->faker->dateTimeThisYear(),
        ];
    }
}
