<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyInquiry extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'property_id',
        'customer_id',
        'inquiry_date',
        'message',
        'update_count'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    protected static function booted()
    {
        static::saving(function ($inquiry) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($inquiry->isDirty() && !$inquiry->isDirty('update_count')) {
                $inquiry->update_count += 1;
            }
        });
    }
}
