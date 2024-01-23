<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Property;
use App\Models\PropertyEnergyRating;
use Illuminate\Database\Eloquent\Factories\Factory;

class PropertyFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Property::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'address'        => $this->faker->address,
            'country'        => $this->faker->country,
            'city'        => $this->faker->city,
            'user_id'    => User::factory(),// Ideally, this should be an ID from the user table
            'price'          => $this->faker->numberBetween(50000, 500000),
            'rooms'       => $this->faker->randomElement([1, 2, 3, 4, 5, 6]),
            'bedrooms'       => $this->faker->randomElement([1, 2, 3, 4, 5, 6]),
            'bathrooms'       => $this->faker->randomElement([1, 2, 3, 4, 5, 6]),
            'floor'       => $this->faker->randomElement([1, 2, 3, 4, 5, 6]),
            'square_feet'    => $this->faker->numberBetween(500, 5000),
            'description'    => $this->faker->paragraph,
            'title'    => $this->faker->title,
            'build'    => $this->faker->year,
            'latitude' => $this->faker->latitude,
            'longitude' => $this->faker->longitude,
            'status'         => $this->faker->randomElement([Property::STATUS_SALE, Property::STATUS_RENT]),
            'construction'         => $this->faker->randomElement([Property::CONSTRUCTION_PANEL, Property::CONSTRUCTION_PREFABRICATED, Property::CONSTRUCTION_GANGED, Property::CONSTRUCTION_BRICK]),
            'heating'         => $this->faker->randomElement([Property::HEATING_GAS, Property::HEATING_CENTRAL, Property::HEATING_AIR_CONDITIONING]),
            'property_type'  => $this->faker->randomElement([Property::TYPE_HOUSE, Property::TYPE_APARTMENT, Property::TYPE_LOT, Property::TYPE_COMMERCIAL, Property::TYPE_GARAGE]),
            'name'    => $this->faker->name,
            'username'    => $this->faker->userName,
            'email'    => $this->faker->email,
            'phone'    => $this->faker->phoneNumber,
            'date_listed'    => $this->faker->date(),
            'update_count'   => $this->faker->numberBetween(0, 10)
        ];
    }
}
