<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BrandController;  
use App\Http\Controllers\Admin\Auth\AuthController;                                                                                  
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('login', [App\Http\Controllers\API\AuthController::class, 'login'])->name('login');
Route::post('registration', [App\Http\Controllers\API\AuthController::class, 'customRegistration'])->name('register'); 
Route::resource('brand',BrandController::class);
Route::post('postLogin',[LoginController::class,'login'])->name('admin.login');
