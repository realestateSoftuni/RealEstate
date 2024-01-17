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

    public function login(Request $request)
    {
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->accessToken;

            return response()->json(['message' => 'Login successful', 'user' => $user, 'token' => $token]);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }

    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = $user->createToken('authToken')->accessToken;

        return response()->json(['message' => 'Registration successful', 'user' => $user, 'token' => $token]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json(['message' => 'Logout successful']);
    }

    public function create_user(Request $request)
    {
        request()->validate([
            'username'=>'required|unique:users|max:255',
            'email'=>'required|email|unique:users',
            'first_name'=>'required|max:255',
            'last_name'=>'required|max:255',
            'password'=> [
                'required',
                'confirmed',
                new ComplexPassword(),
            ],
        ]);

        $save = new User;
        $save->username = trim($request->username);
        $save->first_name = trim($request->first_name);
        $save->last_name = trim($request->last_name);
        $save->email = trim($request->email);
        $save->password = Hash::make($request->password);
        $save->remember_token = Str::random(20);
        $save->save();

//        Mail::to($save->email)->send(new RegisterMail($save));
        return response()->json(['message' => 'Your account has been registered! Please check your email to verify!'], 201);
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
