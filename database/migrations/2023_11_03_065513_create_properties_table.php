<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Property;

class CreatePropertiesTable extends Migration
{
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('address')->unique(); // Assuming addresses are unique
            $table->unsignedBigInteger('location_id');
            $table->unsignedBigInteger('agent_id')->nullable();
            $table->unsignedBigInteger('property_energy_rating_id');
            $table->decimal('price', 15, 2); // Assuming 15 digits in total and 2 after the decimal
            $table->integer('bedrooms');
            $table->decimal('square_feet', 15, 2);
            $table->text('description');
            $table->enum('status', [Property::STATUS_AVAILABLE, Property::STATUS_RENTED, Property::STATUS_SOLD])->default(Property::STATUS_AVAILABLE);
            $table->enum('property_type', [Property::TYPE_APARTMENT, Property::TYPE_HOUSE, Property::TYPE_LAND]);
            $table->date('date_listed');
            $table->integer('n')->default(0);
            $table->softDeletes();
            $table->timestamps();

            // Foreign keys
            $table->foreign('location_id')->references('id')->on('locations')->onDelete('cascade');
            $table->foreign('property_energy_rating_id')->references('id')->on('property_energy_ratings')->onDelete('cascade');
            $table->foreign('agent_id')->references('id')->on('agents')->onDelete('set null');

            // Indexes
            $table->index('location_id');
            $table->index('agent_id');
            $table->index('price');
        });
    }

    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
