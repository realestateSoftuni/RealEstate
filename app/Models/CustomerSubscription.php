<?php

// app/Models/UserSubscription.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerSubscription extends Model
{
    protected $fillable = [
        'customer_id',
        'location_id', // Assuming location is represented by an ID.
        'min_price',
        'max_price',
        'min_square_feet',
        'max_square_feet',
        'update_count'
        // any other criteria fields
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function location()
    {
        return $this->belongsTo(Location::class);
    }


    protected static function booted()
    {
        static::saving(function ($customer_subscription) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($customer_subscription->isDirty() && !$customer_subscription->isDirty('update_count')) {  // Check if any field other than 'update_count' is being updated
                $customer_subscription->update_count += 1;
            }
        });
    }
}
