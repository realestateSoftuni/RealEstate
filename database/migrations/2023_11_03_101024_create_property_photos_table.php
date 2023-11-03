<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertyPhotosTable extends Migration
{
    public function up()
    {
        Schema::create('property_photos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('property_id');
            $table->string('photo_url');
            $table->integer('update_count')->default(0);
            $table->timestamps();
            $table->softDeletes();

            // Foreign key constraint
            $table->foreign('property_id')->references('id')->on('properties')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('property_photos');
    }
}
