<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddPropertyDataTable extends Migration
{
    public function up()
    {
        Schema::create('add_property_data', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100)->nullable(false);
            $table->text('description')->nullable();
            $table->enum('status', ['Rent', 'Sale'])->nullable(false);
            $table->enum('type', ['House', 'Apartment', 'Commercial', 'Lot', 'Garage'])->nullable(false);
            $table->integer('rooms')->nullable(false)->unsigned();
            $table->decimal('price', 10, 2)->nullable(false)->unsigned();
            $table->decimal('area', 10, 2)->nullable(false)->unsigned();
            $table->year('build')->nullable();
            $table->text('address')->nullable();
            $table->string('city')->nullable(false);
            $table->string('state')->nullable();
            $table->string('country')->nullable(false);
            $table->decimal('latitude', 10, 8)->nullable();
            $table->decimal('longitude', 11, 8)->nullable();
            $table->integer('floor')->nullable()->unsigned();
            $table->enum('construction', ['Brick', 'Ganged Wall Form', 'Prefabricated', 'Panel-build'])->nullable();
            $table->integer('bedrooms')->nullable()->unsigned();
            $table->integer('bathrooms')->nullable()->unsigned();
            $table->enum('heating', ['Air Conditioning', 'Gas', 'Central heating'])->nullable();
            $table->boolean('inConstruction')->default(false);
            $table->boolean('garage')->default(false);
            $table->boolean('swimmingPool')->default(false);
            $table->boolean('furnished')->default(false);
            $table->boolean('parking')->default(false);
            $table->boolean('gym')->default(false);
            $table->boolean('alarm')->default(false);
            $table->boolean('windowCovering')->default(false);
            $table->boolean('guard')->default(false);
            $table->boolean('tv_wifi')->default(false);
            $table->boolean('renovated')->default(false);
            $table->boolean('yard')->default(false);
            $table->foreignId('userID')->constrained('users');
            $table->string('name', 20)->nullable(false);
            $table->string('username', 20)->nullable(false);
            $table->string('email')->nullable(false);
            $table->string('phone')->nullable();
            $table->dateTime('createdOn')->nullable();
            $table->dateTime('updatedOn')->nullable();
            $table->dateTime('deletedOn')->nullable();
            $table->integer('likedBy')->nullable();
            $table->timestamps();
        });

        // Add constraints for minimum and maximum lengths
        DB::statement('ALTER TABLE add_property_data ADD CHECK (CHAR_LENGTH(title) BETWEEN 4 AND 100)');
        DB::statement('ALTER TABLE add_property_data ADD CHECK (CHAR_LENGTH(name) BETWEEN 2 AND 20)');
        DB::statement('ALTER TABLE add_property_data ADD CHECK (CHAR_LENGTH(username) BETWEEN 4 AND 20)');
        DB::statement('ALTER TABLE add_property_data ADD CHECK (CHAR_LENGTH(email) > 0)');

        // Add check constraint for valid email
        DB::statement('ALTER TABLE add_property_data ADD CHECK (email REGEXP \'^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,4}$\')');
    }

    public function down()
    {
        Schema::dropIfExists('add_property_data');
    }
}
