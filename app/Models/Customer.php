<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'budget_min',
        'budget_max',
        'update_count'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function locations()
    {
        return $this->belongsToMany(Location::class, 'customer_location');
    }

    public function inquiries()
    {
        return $this->hasMany(PropertyInquiry::class);
    }

    protected static function booted()
    {
        static::saving(function ($customer) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($customer->isDirty() && !$customer->isDirty('update_count')) {  // Check if any field other than 'update_count' is being updated
                $customer->update_count += 1;
            }
        });
    }
}
