<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AgentNotification extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'agent_id',
        'title',
        'message',
        'is_read',
        'update_count'
    ];

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
