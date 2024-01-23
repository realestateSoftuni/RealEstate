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
            $table->enum('status', [Property::STATUS_RENT, Property::STATUS_SALE]);
            $table->text('title');
            $table->text('description');
            $table->enum('property_type', [Property::TYPE_APARTMENT, Property::TYPE_HOUSE, Property::TYPE_LOT, Property::TYPE_COMMERCIAL, Property::TYPE_GARAGE]);
            $table->integer('rooms');
            $table->decimal('price', 15, 2); // Assuming 15 digits in total and 2 after the decimal
            $table->decimal('square_feet', 15, 2);
            $table->year('build');
            $table->string('country');
            $table->string('state');
            $table->string('city');
            $table->string('address')->unique(); // Assuming addresses are unique
            $table->decimal('latitude', 9, 6);
            $table->decimal('longitude', 9, 6);
            $table->integer('floor');
            $table->enum('construction', [Property::CONSTRUCTION_BRICK, Property::CONSTRUCTION_GANGED, Property::CONSTRUCTION_PREFABRICATED, Property::CONSTRUCTION_PANEL]);
            $table->integer('bedrooms');
            $table->integer('bathrooms');
            $table->enum('heating', [Property::HEATING_CENTRAL, Property::HEATING_GAS, Property::HEATING_AIR_CONDITIONING]);
            $table->unsignedBigInteger('userId');
            $table->string('name');
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('phone')->nullable();

            $table->date('date_listed');
            $table->integer('update_count')->default(0);
            $table->softDeletes();
            $table->timestamps();

            // Foreign keys
            $table->foreign('userId')->references('id')->on('user')->onDelete('cascade');

            // Indexes
            $table->index('city');
            $table->index('userId');
            $table->index('price');
        });
    }

    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
