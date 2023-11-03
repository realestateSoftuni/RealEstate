<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         \App\Models\User::factory(10)->create();
         \App\Models\Location::factory(10)->create();
         \App\Models\Agent::factory(10)->create();
         \App\Models\AgentNotification::factory(10)->create();
         \App\Models\AgentPhoto::factory(10)->create();
         \App\Models\Customer::factory(10)->create();
         \App\Models\CustomerSearchHistory::factory(10)->create();
         \App\Models\CustomerSubscription::factory(10)->create();
         \App\Models\CustomerNotification::factory(10)->create();
         \App\Models\Property::factory(10)->create();
         \App\Models\PropertyViewings::factory(10)->create();
         \App\Models\PropertyEnergyRating::factory(10)->create();
         \App\Models\PropertyFeature::factory(10)->create();
         \App\Models\PropertyInquiry::factory(10)->create();
         \App\Models\PropertyPhoto::factory(10)->create();
         \App\Models\PropertyReview::factory(10)->create();
         \App\Models\PropertyMortagageDetails::factory(10)->create();
    }
}
