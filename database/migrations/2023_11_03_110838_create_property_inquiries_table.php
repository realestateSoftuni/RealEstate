<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertyInquiriesTable extends Migration
{
    public function up()
    {
        Schema::create('property_inquiries', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('property_id');
            $table->unsignedBigInteger('customer_id');
            $table->date('inquiry_date');
            $table->text('message');
            $table->integer('update_count')->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('property_id')->references('id')->on('properties')->onDelete('cascade');
            $table->foreign('customer_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('inquiries');
    }
}
