<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyMortageDetails extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'property_id',
        'lender_name',
        'start_date',
        'end_date',
        'amount',
        'outstanding_amount',
        'monthly_payment',
        'update_count'
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }

    protected static function booted()
    {
        static::saving(function ($propertyMortgage) {
            if ($propertyMortgage->isDirty() && !$propertyMortgage->isDirty('update_count')) {
                $propertyMortgage->update_count += 1;
            }
        });
    }
}