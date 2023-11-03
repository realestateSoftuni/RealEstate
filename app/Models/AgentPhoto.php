<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class AgentPhoto extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'agent_id',
        'photo_url',
        'update_count'
    ];

    public function agent()
    {
        return $this->belongsTo(Agent::class);
    }
}
