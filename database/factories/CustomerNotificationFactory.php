<?php

namespace Database\Factories;

use App\Models\Customer;
use App\Models\CustomerNotification;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerNotificationFactory extends Factory
{
    protected $model = CustomerNotification::class;

    public function definition()
    {
        return [
            'customer_id' => Customer::factory(),
            'content' => $this->faker->sentence,
            'type' => $this->faker->randomElement(['alert', 'message', 'update']), // Example types
            'read_at' => null, // Assuming the notification is unread when created
            'update_count' => 0,
        ];
    }
}
