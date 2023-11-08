<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Location;
use App\Models\Agent;
use App\Models\AgentNotification;
use App\Models\Property;
use App\Models\PropertyEnergyRating;
use App\Models\PropertyMortagageDetails;
use App\Models\PropertyFeature;
use App\Models\PropertyInquiry;
use App\Models\PropertyReview;
use App\Models\PropertyViewings;
use App\Models\Customer;
use App\Models\CustomerSearchHistory;
use App\Models\CustomerNotification;
use App\Models\CustomerSubscription;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;


class ModelRelationshipsTest extends TestCase
{
    use RefreshDatabase;

    // This will migrate the database and refresh it for each test.

    /** @test */
    public function testUserCustomerRelationship()
    {
        // Create a user and a customer profile associated with that user
        $user = User::factory()->create(['role' => User::ROLE_CUSTOMER]);
        $customer = Customer::factory()->for($user)->create();

        // Retrieve the customer profile via the relationship and assert it's the same
        $fetchedCustomer = $user->customer;

        $this->assertTrue($fetchedCustomer->is($customer));
    }

    /** @test */
    public function testUserAgentRelationship()
    {
        // Create a user and an agent profile associated with that user
        $user = User::factory()->create(['role' => User::ROLE_AGENT]);
        $agent = Agent::factory()->for($user)->create();

        // Retrieve the agent profile via the relationship and assert it's the same
        $fetchedAgent = $user->agent;

        $this->assertTrue($fetchedAgent->is($agent));
    }


    /** @test */
    public function testUpdateCountIncrementsOnSave()
    {
        // Create a user
        $user = User::factory()->create();

        // Initial update_count should be 0
        $this->assertEquals(0, $user->update_count);

        // Update the user
        $user->first_name = 'UpdatedFirstName';
        $user->save();

        // Now the update_count should be 1
        $this->assertEquals(1, $user->update_count);
    }

    /** @test */
    public function testAgentPropertiesRelationship()
    {
        // Create an agent and a property associated with that agent
        $agent = Agent::factory()->create();
        $property = Property::factory()->for($agent, 'agent')->create();

        // Retrieve the properties via the relationship and assert the property is in the collection
        $fetchedProperties = $agent->properties;

        $this->assertTrue($fetchedProperties->contains($property));
    }

    /** @test */
    public function testLocationPropertiesRelationship()
    {
        // Assuming you have a Location factory that relates to properties
        $location = Location::factory()->create();
        $property = Property::factory()->for($location, 'location')->create();

        // Retrieve the properties via the relationship and assert the property is in the collection
        $fetchedProperties = $location->properties;

        $this->assertTrue($fetchedProperties->contains($property));
    }

    /** @test */
    public function testPropertyEnergyRatingRelationship()
    {
        // Assuming you have a PropertyEnergyRating factory that relates to properties
        $energyRating = PropertyEnergyRating::factory()->create();
        $property = Property::factory()
            ->for($energyRating, 'property_energy_rating')
            ->create();

        // Retrieve the property via the relationship and assert it's the same
        $fetchedProperty = $energyRating->properties;

        $this->assertTrue($fetchedProperty->contains($property));


    }

    /** @test */
    public function testPropertyFeaturesRelationship()
    {
        $property = Property::factory()->create();
        $feature = PropertyFeature::factory()->create();

        // Attach the feature to the property
        $property->property_features()->attach($feature);

        // Retrieve the features via the relationship and assert the feature is in the collection
        $fetchedFeatures = $property->property_features;

        $this->assertTrue($fetchedFeatures->contains($feature));
    }

    /** @test */
    public function testPropertyInquiryRelationship()
    {
        $property = Property::factory()->create();
        $customer = Customer::factory()->create();
        $inquiry = PropertyInquiry::factory()->for($property)->for($customer, 'customer')->create();

        // Assert the inquiry is related to the property
        $this->assertTrue($property->property_inquiries->contains($inquiry));

        // Assert the inquiry is related to the customer
        $this->assertTrue($inquiry->customer->is($customer));
    }

    /** @test */
    public function testPropertyMortgageDetailsRelationship()
    {
        $property = Property::factory()->create();
        $mortgageDetails = PropertyMortagageDetails::factory()->for($property)->create();

        // Assert the mortgage details are related to the property
        $this->assertTrue($property->property_mortgage_details->is($mortgageDetails));
    }

    /** @test */
    public function a_property_review_belongs_to_a_property_and_user()
    {

        $property = Property::factory()->create();
        $customer = Customer::factory()->create();
        $review = PropertyReview::factory()->for($property)->for($customer, 'customer')->create();

        $this->assertTrue($review->property->is($property));
        $this->assertTrue($review->customer->is($customer));
    }

    /** @test */
    public function a_property_viewing_belongs_to_a_property_customer_and_agent()
    {
        $property = Property::factory()->create();
        $customer = Customer::factory()->create();
        $agent = Agent::factory()->create();
        $viewing = PropertyViewings::factory()->for($property)->for($customer, 'customer')->for($agent, 'agent')->create();

        $this->assertTrue($viewing->property->is($property));
        $this->assertTrue($viewing->customer->is($customer));
        $this->assertTrue($viewing->agent->is($agent));
    }

    /** @test */
    public function a_customer_search_history_belongs_to_a_customer()
    {
        $customer = Customer::factory()->create();
        $searchHistory = CustomerSearchHistory::factory()->for($customer)->create();

        $this->assertTrue($searchHistory->customer->is($customer));
    }

    /** @test */
    public function a_customer_notification_belongs_to_a_customer()
    {
        $customer = Customer::factory()->create();
        $notification = CustomerNotification::factory()->for($customer)->create();

        $this->assertTrue($notification->customer->is($customer));
    }

    /** @test */
    public function testCustomerSubscriptionRelationships()
    {
        // Create a customer, a location, and a subscription for that customer and location
        $customer = Customer::factory()->create();
        $location = Location::factory()->create();
        $subscription = CustomerSubscription::factory()->for($customer)->for($location)->create();

        // Assert the subscription is related to the customer and location
        $this->assertTrue($subscription->customer->is($customer));
        $this->assertTrue($subscription->location->is($location));
    }

    /** @test */
    public function testAgentNotificationRelationship()
    {
        // Create an agent and a notification for that agent
        $agent = Agent::factory()->create();
        $notification = AgentNotification::factory()->for($agent)->create();

        // Assert the notification is related to the agent
        $this->assertTrue($notification->agent->is($agent));
    }
}
