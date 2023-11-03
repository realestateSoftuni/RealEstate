<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertyPropertyFeaturePivotTable extends Migration
{
    public function up()
    {
        Schema::create('property_property_feature', function (Blueprint $table) {
            $table->unsignedBigInteger('property_id');
            $table->foreign('property_id')->references('id')->on('properties')->onDelete('cascade');

            $table->unsignedBigInteger('property_feature_id');
            $table->foreign('property_feature_id')->references('id')->on('property_features')->onDelete('cascade');

            // Additional fields if necessary
            // $table->boolean('is_default')->default(false);

            $table->primary(['property_id', 'property_feature_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('property_property_feature');
    }
}
