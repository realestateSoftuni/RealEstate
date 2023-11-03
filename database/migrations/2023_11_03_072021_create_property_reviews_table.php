<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertyReviewsTable extends Migration
{
    public function up()
    {
        Schema::create('property_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained()->onDelete('cascade');
            $table->foreignId('customer_id')->constrained()->onDelete('cascade');
            $table->integer('rating');
            $table->text('review_text');
            $table->timestamp('review_date');
            $table->integer('update_count')->default(0);
            $table->timestamps();
            $table->softDeletes();

        });
    }

    public function down()
    {
        Schema::dropIfExists('property_reviews');
    }
}
