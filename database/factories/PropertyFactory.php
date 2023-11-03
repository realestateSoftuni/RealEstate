<?php

namespace Database\Factories;

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
            'location_id'    => $this->faker->randomDigitNotNull, // Ideally, this should be an ID from the locations table
            'property_energy_rating_id' => PropertyEnergyRating::factory(),
            'price'          => $this->faker->numberBetween(50000, 500000),
            'bedrooms'       => $this->faker->randomElement([1, 2, 3, 4, 5]),
            'square_feet'    => $this->faker->numberBetween(500, 5000),
            'description'    => $this->faker->paragraph,
            'status'         => $this->faker->randomElement([Property::STATUS_AVAILABLE, Property::STATUS_SOLD, Property::STATUS_RENTED]),
            'property_type'  => $this->faker->randomElement([Property::TYPE_HOUSE, Property::TYPE_APARTMENT, Property::TYPE_LAND]),
            'date_listed'    => $this->faker->date(),
            'update_count'   => $this->faker->numberBetween(0, 10)

        ];
    }
}
