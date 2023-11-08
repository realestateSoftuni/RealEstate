<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgentsTable extends Migration
{
    public function up()
    {
        Schema::create('agents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->unique();
            $table->integer('years_of_experience');
            $table->integer('total_properties_sold');
            $table->decimal('average_rating', 5, 2); // Assuming ratings won't exceed 999.99
            $table->integer('update_count')->default(0); // Renamed 'n' to 'update_count' for clarity
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('agents');
    }
}
