<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;


class Agent extends Model
{
    use HasFactory, Notifiable, SoftDeletes;

    protected $fillable = [
        'user_id',
        'years_of_experience',
        'total_properties_sold',
        'average_rating',
        'update_count',
    ];

    /**
     * Get the user that the agent profile belongs to.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the properties associated with the agent.
     */
    public function properties()
    {
        return $this->hasMany(Property::class);
    }

    protected static function booted()
    {
        static::saving(function ($user) {
            // Increment 'update_count' when any field other than 'update_count' is being updated
            if ($user->isDirty() && !$user->isDirty('update_count')) {  // Check if any field other than 'update_count' is being updated
                $user->update_count += 1;
            }
        });
    }
}
