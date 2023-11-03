<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertyEnergyRatingsTable extends Migration
{
    public function up()
    {
        Schema::create('energy_ratings', function (Blueprint $table) {
            $table->id();
            $table->enum('rating_value', ['A', 'B', 'C', 'D', 'E', 'F', 'G']);
            $table->integer('update_count')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::dropIfExists('energy_ratings');
    }
}
