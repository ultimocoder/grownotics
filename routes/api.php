<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BrandController;  
use App\Http\Controllers\Admin\Auth\LoginController;                                                                                  

use App\Http\Controllers\Admin\CategoryController;                                                                              
use App\Http\Controllers\Admin\FileUploaderController;  
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
Route::post('addcategory',[CategoryController::class,'store'])->name('category.add');
Route::post('addsubcategory',[CategoryController::class,'sub_store']);
Route::get('getcategory',[CategoryController::class,'index']);

Route::get('getsubcategory',[CategoryController::class,'getsubcategory']);
Route::post('deletecategory/{id}',[CategoryController::class,'destroy']);
Route::post('deletesubcategory/{id}',[CategoryController::class,'sub_destroy']);
Route::get('editcategory/{id}',[CategoryController::class,'edit']);
Route::get('editsubcategory/{id}',[CategoryController::class,'sub_edit']);



Route::post('addbrand',[BrandController::class,'store'])->name('brand.add');

Route::get('getbrand',[BrandController::class,'index']);
Route::post('deletebrand/{id}',[BrandController::class,'destroy']);
Route::get('editbrand/{id}',[BrandController::class,'edit']);

Route::post('registration', [LoginController::class, 'registration'])->name('register'); 
Route::post('submitforgetPassword', [LoginController::class, 'submitForgetPasswordForm'])->name('submitForgetPassword'); 


Route::post('filestore',[FileUploaderController::class,'store'])->name('file.store');
Route::get('getfile',[FileUploaderController::class,'index'])->name('file.get');
Route::get('deletefile/{id}',[FileUploaderController::class,'delete'])->name('file.delete');