<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CustomerNotification extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'customer_id',
        'content',
        'type', // Could be for different types of notifications
        'read_at', // Nullable timestamp to mark when the notification was read
        'update_count'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    protected static function booted()
    {
        static::saving(function ($customer_notification) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($customer_notification->isDirty() && !$customer_notification->isDirty('update_count')) {  // Check if any field other than 'update_count' is being updated
                $customer_notification->update_count += 1;
            }
        });
    }
}
