<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BrandController;  
use App\Http\Controllers\Admin\Auth\LoginController;                                                                                   
use App\Http\Controllers\Admin\CategoryController;                                                                                  
use App\Http\Controllers\Admin\ProductController;                                                                                  
use App\Http\Controllers\Admin\DaynamicController;
use App\Http\Controllers\Admin\FileUploaderController;
use App\Models\Category;

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


Route::post('postLogin',[LoginController::class,'login'])->name('admin.login');
// Dynamic Page api
Route::post('addpage',[DaynamicController::class,'store'])->name('addpage.add');
Route::get('getdyanmic',[DaynamicController::class,'index']);
Route::post('deletepage/{id}',[DaynamicController::class,'destroy']);
Route::get('editpage/{id}',[DaynamicController::class,'edit']);
Route::post('active_deactive_dynamic/{id}',[DaynamicController::class,'active_deactive_dynamic']);
Route::get('getpage',[DaynamicController::class,'getpage']);
Route::post('deletemultiplepage',[DaynamicController::class,'deletemultiplepage']);
// Category Subcategory api
Route::post('addcategory',[CategoryController::class,'store'])->name('category.add');
Route::post('active_deactive_category/{id}',[CategoryController::class,'active_deactive_cat']);
Route::post('active_deactive_subcategory/{id}',[CategoryController::class,'active_deactive_subcat']);
Route::post('addsubcategory',[CategoryController::class,'sub_store']);
Route::get('getcategory',[CategoryController::class,'index']);
Route::get('getoptioncategory',[CategoryController::class,'getoptioncategory']);
Route::get('getsubcategory',[CategoryController::class,'getsubcategory']);
Route::post('deletecategory/{id}',[CategoryController::class,'destroy']);
Route::post('deletesubcategory/{id}',[CategoryController::class,'sub_destroy']);
Route::get('editcategory/{id}',[CategoryController::class,'edit']);
Route::get('editsubcategory/{id}',[CategoryController::class,'sub_edit']);
Route::get('getcat',[CategoryController::class,'getcat']);
Route::post('deletemultiplecat',[CategoryController::class,'deletemultiplecat']);
Route::post('deletemultiplesubcat',[CategoryController::class,'deletemultiplesubcat']);
Route::get('getsubcat',[CategoryController::class,'getsubcat']);
Route::post('searchcategory',[CategoryController::class,'searchcategory']);
// product api
Route::post('addproduct',[ProductController::class,'store']);
Route::get('getproduct',[ProductController::class,'index']);
Route::post('deleteproduct/{id}',[ProductController::class,'destroy']);
Route::post('active_deactive_product/{id}',[ProductController::class,'active_deactive']);
Route::get('editproduct/{id}',[ProductController::class,'edit']);
Route::get('product-return-sub-category/{id}',[ProductController::class,'get_sub_cat']);
Route::get('getpro',[ProductController::class,'getpro']);
Route::post('deletemultipleproduct',[ProductController::class,'deletemultipleproduct']);
// brand api
Route::resource('brand',BrandController::class);
Route::post('addbrand',[BrandController::class,'store'])->name('brand.add');
Route::get('getbrand',[BrandController::class,'index']);
Route::post('active_deactive_brand/{id}',[BrandController::class,'active_deactive_brand']);
Route::get('getoptionbrand',[BrandController::class,'getoptionbrand']);
Route::post('deletebrand/{id}',[BrandController::class,'destroy']);
Route::get('editbrand/{id}',[BrandController::class,'edit']);
//media uplaod
Route::post('filestore',[FileUploaderController::class,'store'])->name('file.store');
Route::get('getfile',[FileUploaderController::class,'index'])->name('file.get');
Route::get('deletefile/{id}',[FileUploaderController::class,'delete'])->name('file.delete');