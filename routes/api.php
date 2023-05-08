<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BrandController;  
use App\Http\Controllers\Admin\Auth\AuthController;                                                                                  

use App\Http\Controllers\Admin\CategoryController;                                                                              
use App\Http\Controllers\Admin\FileUploaderController;  
use App\Http\Controllers\Admin\ProductController;  
use App\Http\Controllers\Admin\DynamicController;  
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



Route::post('postLogin',[AuthController::class,'login'])->name('admin.login');
Route::post('registration', [AuthController::class, 'registration'])->name('register'); 
Route::post('submitforgetPassword', [AuthController::class, 'submitForgetPasswordForm'])->name('submitForgetPassword'); 
// Route::group(['middleware' => ['jwt.verify']], function() {
Route::get('getcategory',[CategoryController::class,'index']);

Route::post('addcategory',[CategoryController::class,'store'])->name('category.add');
Route::post('addsubcategory',[CategoryController::class,'sub_store']);

Route::get('getsubcategory',[CategoryController::class,'getsubcategory']);
Route::post('deletecategory/{id}',[CategoryController::class,'destroy']);

Route::post('deletesubcategory/{id}',[CategoryController::class,'sub_destroy']);
Route::get('editcategory/{id}',[CategoryController::class,'edit']);
Route::get('editsubcategory/{id}',[CategoryController::class,'sub_edit']);


Route::post('addbrand',[BrandController::class,'store'])->name('brand.add');
Route::get('getbrand',[BrandController::class,'index']);
Route::post('deletebrand/{id}',[BrandController::class,'destroy']);
Route::get('editbrand/{id}',[BrandController::class,'edit']);


Route::post('filestore',[FileUploaderController::class,'store'])->name('file.store');
Route::get('getfile',[FileUploaderController::class,'index'])->name('file.get');
Route::get('deletefile/{id}',[FileUploaderController::class,'delete'])->name('file.delete');

Route::post('addproduct',[ProductController::class,'store']);
Route::get('getproduct',[ProductController::class,'index']);
Route::post('deleteproduct/{id}',[ProductController::class,'destroy']);
Route::post('active_deactive_product/{id}',[ProductController::class,'active_deactive']);
Route::get('editproduct/{id}',[ProductController::class,'edit']);
Route::get('product-return-sub-category/{id}',[ProductController::class,'get_sub_cat']);
Route::get('getoptioncategory',[CategoryController::class,'getoptioncategory']);
Route::get('getoptionbrand',[BrandController::class,'getoptionbrand']);

Route::post('addpage',[DynamicController::class,'store'])->name('addpage.add');
Route::get('getdyanmic',[DynamicController::class,'index']);
Route::post('deletepage/{id}',[DynamicController::class,'destroy']);
Route::get('editpage/{id}',[DynamicController::class,'edit']);
  
// });






