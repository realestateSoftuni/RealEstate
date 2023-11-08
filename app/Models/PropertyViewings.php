<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PropertyViewings extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'property_id',
        'user_id',
        'agent_id',
        'scheduled_time',
        'status',
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

    public function agent()
    {
        return $this->belongsTo(Agent::class);
    }

    protected static function booted()
    {
        static::saving(function ($agent) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($agent->isDirty() && !$agent->isDirty('update_count')) {  // Check if any field other than 'update_count' is being updated
                $agent->update_count += 1;
            }
        });
    }

}
