<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Subcategory;
use Str;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product = Product::select('products.id', 'products.status', 'products.name', 'products.price', 'products.dis_price', 'products.product_des', 'products.feturer_image', 'categories.name as cat_name', 'subcategories.name as sub_cat_name', 'brands.name as brand_name')->leftjoin('categories', 'products.cat_id', '=', 'categories.id')->leftjoin('subcategories', 'products.sub_cat_id', '=', 'subcategories.id')->leftjoin('brands', 'products.brand_id', '=', 'brands.id')->paginate(10);
        return response()->json($product);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(!empty($request->id)){
            if($request->file1 != 'undefined'){
                $request->validate([
                    'file1' => 'required|image|mimes:png,jpg,jpeg|max:2048',
                    'name' => 'required',
                    'cat_id' => 'required',
                    'sub_cat_id' => 'required',
                    'brand_id' => 'required',
                    'price' => 'required',
                    'dis_price' => 'required',
                    'product_des' => 'required'
                ]);
                $imageName = time().'.'.$request->file1->extension();
                $request->file1->move(public_path('images'), $imageName);
                Product::where('id', $request->id)->update([
                    'name' => $request->input('name'),
                    'cat_id' => $request->input('cat_id'),
                    'sub_cat_id' => $request->input('sub_cat_id'),
                    'brand_id' => $request->input('brand_id'),
                    'feturer_image' => $imageName,
                    'slug' => Str::slug($request->input('name')),
                    'price' => $request->input('price'),
                    'dis_price' => $request->input('dis_price'),
                    'product_des' => $request->input('product_des'),
                ]);
            }else{
                $request->validate([
                    'file1' => 'required|image|mimes:png,jpg,jpeg|max:2048',
                    'name' => 'required',
                    'cat_id' => 'required',
                    'sub_cat_id' => 'required',
                    'brand_id' => 'required',
                    'price' => 'required',
                    'dis_price' => 'required',
                    'product_des' => 'required'
                ]);
                Product::where('id', $request->id)->update([
                    'name' => $request->input('name'),
                    'cat_id' => $request->input('cat_id'),
                    'sub_cat_id' => $request->input('sub_cat_id'),
                    'brand_id' => $request->input('brand_id'),
                    'slug' => Str::slug($request->input('name')),
                    'price' => $request->input('price'),
                    'dis_price' => $request->input('dis_price'),
                    'product_des' => $request->input('product_des'),
                ]);
            }
            $success = "Product update Successfully";
            return response()->json($success);
        }else{
            $request->validate([
                'file1' => 'required|image|mimes:png,jpg,jpeg|max:2048',
                'name' => 'required',
                'cat_id' => 'required',
                'sub_cat_id' => 'required',
                'brand_id' => 'required',
                'price' => 'required',
                'dis_price' => 'required',
                'product_des' => 'required'
            ]);
            $imageName = time().'.'.$request->file1->extension();
            $request->file1->move(public_path('images'), $imageName);
            $product = new Product([
                'name' => $request->input('name'),
                'cat_id' => $request->input('cat_id'),
                'sub_cat_id' => $request->input('sub_cat_id'),
                'brand_id' => $request->input('brand_id'),
                'feturer_image' => $imageName,
                'slug' => Str::slug($request->input('name')),
                'price' => $request->input('price'),
                'dis_price' => $request->input('dis_price'),
                'product_des' => $request->input('product_des'),
            ]);
            $product->save();
            $success = "Product created Successfully";
            return response()->json($success);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function get_sub_cat($id){
        $sub_cat = Subcategory::where('sub_cat', $id)->where('status', 1)->get();
        return response()->json($sub_cat);
    }
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::where('id', $id)->first();
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {    
        Product::where('id', $id)->delete();
        return response()->json([
            'message'=>'Product Deleted Successfully!!'
        ]);
    }
    
    public function active_deactive($id)
    {   
        $data = explode(',', $id);
        Product::where('id', $data[0])->update(['status' => $data[1]]);
        return response()->json([
            'message'=>'Product Status Updated Successfully!!'
        ]);
    }
}
