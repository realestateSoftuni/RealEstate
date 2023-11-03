<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AgentNotification extends Model
{
    use HasFactory;

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
}
