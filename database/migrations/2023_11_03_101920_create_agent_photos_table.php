<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAgentPhotosTable extends Migration
{
    public function up()
    {
        Schema::create('agent_photos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('agent_id');
            $table->string('photo_url');
            $table->integer('update_count')->default(0);
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('agent_id')->references('id')->on('agents')->onDelete('cascade');
            $table->unique('agent_id'); // Ensures one-to-one relationship
        });
    }

    public function down()
    {
        Schema::dropIfExists('agent_photos');
    }
}
