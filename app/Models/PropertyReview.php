<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyReview extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'property_id',
        'customer_id',
        'rating',
        'review_text',
        'review_date',
        'update_count'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    protected static function booted()
    {
        static::saving(function ($review) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($review->isDirty() && !$review->isDirty('update_count')) {
                $review->update_count += 1;
            }
        });
    }
}
