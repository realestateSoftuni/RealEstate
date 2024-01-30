<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertyFeaturesTable extends Migration
{
    public function up()
    {
        Schema::create('property_features', function (Blueprint $table) {
            $table->id();
            $table->string('feature_name');
            $table->unsignedBigInteger('property_id');
            $table->foreign('property_id')->references('id')->on('properties')->onDelete('cascade');
            $table->integer('update_count')->default(0);
            $table->softDeletes();
            $table->timestamps();
        });

    }

    public function down()
    {
        Schema::dropIfExists('property_features');
    }
}
