<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\PropertyController;

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


Route::post('/api/search', [SearchController::class, 'search']);

// Route to list all properties
Route::get('/properties', [PropertyController::class, 'index']);

// Route to view a specific property
Route::get('/properties/{id}', [PropertyController::class, 'show']);

// Route to create a new property
Route::post('/properties', [PropertyController::class, 'store']);

// Route to update an existing property
Route::put('/properties/{id}', [PropertyController::class, 'update']);

// Route to delete a property
Route::delete('/properties/{id}', [PropertyController::class, 'destroy']);


