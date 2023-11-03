<?php


use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertyMortagageDetailsTable extends Migration
{
    public function up()
    {
        Schema::create('property_mortagage_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained()->onDelete('cascade');
            $table->string('lender_name');
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();
            $table->decimal('amount', 12, 2);
            $table->decimal('outstanding_amount', 12, 2);
            $table->decimal('monthly_payment', 12, 2);
            $table->integer('update_count')->default(0);
            $table->timestamps();
            $table->softDeletes();

            // Foreign key constraints


        });
    }

    public function down()
    {
        Schema::dropIfExists('property_mortagage_details');
    }
}
