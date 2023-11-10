<?php

namespace App\Http\Controllers;

use App\Rules\ComplexPassword;
use Illuminate\Http\Request;
use App\Models\User;
use App\Mail\RegisterMail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    public function create_user(Request $request)
    {
        request()->validate([
            'username'=>'required|unique:users|max:255',
            'email'=>'required|email|unique:users',
            'password'=> [
                'required',
                'confirmed',
                new ComplexPassword(),
            ],
        ]);

        $save = new User;
        $save->username = trim($request->username);
        $save->email = trim($request->email);
        $save->password = Hash::make($request->password);
        $save->remember_token = Str::random(20);
        $save->save();

        Mail::to($save->email)->send(new RegisterMail($save));
        return response()->json(['message' => 'Your account has been registered. Please check your email to verify.'], 201);
    }

    public function verify($token)
    {
        $user = User::where('remember_token', '=', $token)->first();
        if(!empty($user))
        {
            $user->email_verified_at = date('Y-m-d H:i:s');
            $user->remember_token = Str::random(40);
            $user->is_confirmed = True;
            $user->save();
        }
        else
        {
            abort(404, 'Verification failed: Invalid or expired token.');
        }
    }
}
