<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition()
    {
        return [
            'username' => $this->faker->userName,
            'email' => $this->faker->unique()->safeEmail,
            'password' => bcrypt('password'), // In a real application, use Hash::make instead.
            'role' => $this->faker->randomElement([User::ROLE_CUSTOMER, User::ROLE_AGENT, User::ROLE_ADMIN]),
            'profile_picture' => $this->faker->imageUrl(),
            'first_name' => $this->faker->firstName,
            'last_name' => $this->faker->lastName,
            'phone_number' => $this->faker->phoneNumber,
            'is_confirmed' => $this->faker->boolean,
            'update_count' => 0,
        ];
    }
}
