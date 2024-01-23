<?php


namespace App\Models;

use App\Models\Agent;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;


class User extends Authenticatable
{
    use Notifiable, SoftDeletes, HasFactory;

    const ROLE_CUSTOMER = 'customer';
    const ROLE_AGENT = 'agent';
    const ROLE_ADMIN = 'admin';

    protected $fillable = [
        'username',
        'email',
        'password',
        'role',
        'profile_picture',
        'first_name',
        'last_name',
        'phone_number',
        'is_confirmed',
        'update_count',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_confirmed' => 'boolean',
    ];

    public function customer()
    {
        return $this->hasOne(Customer::class);
    }

    public function agent()
    {
        return $this->hasOne(Agent::class);
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
