<?php

// app/Models/UserSearchHistory.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CustomerSearchHistory extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'customer_id',
        'search_query', // JSON or text field to store the search criteria
        'search_date', // Timestamp when the search was made
        'update_count'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    protected static function booted()
    {
        static::saving(function ($customer_search_history) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($customer_search_history->isDirty() && !$customer_search_history->isDirty('update_count')) {  // Check if any field other than 'update_count' is being updated
                $customer_search_history->update_count += 1;
            }
        });
    }
}
