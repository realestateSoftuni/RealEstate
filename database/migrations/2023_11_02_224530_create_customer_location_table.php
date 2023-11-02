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
            $table->unsignedBigInteger('customer_id');
            $table->unsignedBigInteger('location_id');
            $table->timestamps();

            // Foreign keys constraints
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
            $table->foreign('location_id')->references('id')->on('locations')->onDelete('cascade');

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
