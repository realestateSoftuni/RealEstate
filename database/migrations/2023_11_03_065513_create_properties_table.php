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
            $table->unsignedBigInteger('user_id');
            $table->enum('status', [Property::STATUS_RENT, Property::STATUS_SALE]);
            $table->text('title');
            $table->text('description')->nullable();
            $table->enum('property_type', [Property::TYPE_APARTMENT, Property::TYPE_HOUSE, Property::TYPE_LOT, Property::TYPE_COMMERCIAL, Property::TYPE_GARAGE]);
            $table->integer('rooms');
            $table->decimal('price', 15, 2); // Assuming 15 digits in total and 2 after the decimal
            $table->decimal('square_feet', 15, 2);
            $table->year('build')->nullable();
            $table->string('country');
            $table->string('state')->nullable();
            $table->string('city');
            $table->string('address')->nullable();
            $table->decimal('latitude', 9, 6)->nullable();
            $table->decimal('longitude', 9, 6)->nullable();
            $table->integer('floor')->nullable();
            $table->enum('construction', [Property::CONSTRUCTION_BRICK, Property::CONSTRUCTION_GANGED, Property::CONSTRUCTION_PREFABRICATED, Property::CONSTRUCTION_PANEL])->nullable();
            $table->integer('bedrooms')->nullable();
            $table->integer('bathrooms')->nullable();
            $table->enum('heating', [Property::HEATING_CENTRAL, Property::HEATING_GAS, Property::HEATING_AIR_CONDITIONING])->nullable();
            $table->string('name');
            $table->string('username');
            $table->string('email');
            $table->string('phone')->nullable();

//            $table->date();
            $table->integer('update_count')->default(0);
            $table->softDeletes();
            $table->timestamps();

            // Foreign keys
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            // Indexes
            $table->index('city');
            $table->index('user_id');
            $table->index('price');
        });
    }

    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
