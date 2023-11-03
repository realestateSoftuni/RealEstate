<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerLocationTable extends Migration
{
    public function up()
    {
        Schema::create('customer_location', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained()->onDelete('cascade');
            $table->foreignId('location_id')->constrained()->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();

            // Optional: Indexes for faster query performance
            $table->index('customer_id');
            $table->index('location_id');
        });
    }

    public function down()
    {
        Schema::dropIfExists('customer_location');
    }
}
