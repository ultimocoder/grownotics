<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BrandController;  
use App\Http\Controllers\Admin\Auth\LoginController;                                                                                  
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('brand',BrandController::class);
Route::post('postLogin',[LoginController::class,'login'])->name('admin.login');
Route::post('registration', [LoginController::class, 'registration'])->name('register'); 
Route::post('submitforgetPassword', [LoginController::class, 'submitForgetPasswordForm'])->name('submitForgetPassword'); 
