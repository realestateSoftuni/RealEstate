<?php

// database/migrations/xxxx_xx_xx_create_user_search_histories_table.php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomerSearchHistoriesTable extends Migration
{
    public function up()
    {
        Schema::create('user_search_histories', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id');
            $table->text('search_query'); // Or JSON if you prefer
            $table->timestamp('search_date')->useCurrent();
            $table->timestamps();
            $table->integer('update_count');

            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('customer_search_histories');
    }
}
