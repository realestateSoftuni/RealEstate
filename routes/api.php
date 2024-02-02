<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\API\PropertiesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('verify/{token}', [AuthController::class,'verify']);

Route::post('/create_user', [AuthController::class, 'create_user'])->name('create_user');

Route::post('/add_property', [PropertiesController::class, 'add_property'])->name('add_property');

Route::get('/all-properties/{status}', [PropertiesController::class, 'getAllProperties']);

Route::get('/recent-properties/{status}/{count}', [PropertiesController::class, 'getRecentProperties']);

Route::get('/properties/{id}', [PropertiesController::class, 'show']);

