<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Subcategory;
use Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $brands = Category::all();
        return response()->json($brands);
    }
    public function getsubcategory()
    {
        //
        $brands = Subcategory::select('subcategories.id', 'subcategories.name', 'subcategories.slug', 'categories.name as cat_name')->leftJoin('categories', 'subcategories.sub_cat', '=', 'categories.id')->get();
        return response()->json($brands);
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
            $request['slug'] = Str::slug($request->name);
            Category::where('id', $request->id)->update(['name' => $request->name, 'slug' => $request->slug]);
            return response()->json([
                'message'=>'Category Update Successfully!!'
            ]);
        }else{
            $request['slug'] = Str::slug($request->name);
            Category::create($request->post());
            return response()->json([
                'message'=>'Category Created Successfully!!'
            ]);
        }
    }
    public function sub_store(Request $request)
    {
        if(!empty($request->id)){
            $request['slug'] = Str::slug($request->name);
            Subcategory::where('id', $request->id)->update(['name' => $request->name, 'sub_cat' => $request->sub_cat, 'slug' => $request->slug]);
            return response()->json([
                'message'=>'Sub Category Update Successfully!!'
            ]);
        }else{
            $request['slug'] = Str::slug($request->name);
            Subcategory::create($request->post());
            return response()->json([
                'message'=>'Sub Category Created Successfully!!'
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
        $brand = Category::where('id', $id)->first();
        return response()->json($brand);
    }
    public function sub_edit($id)
    {
        $brand = Subcategory::where('id', $id)->first();
        return response()->json($brand);
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
        Category::where('id', $id)->delete();
        return response()->json([
            'message'=>'Category Deleted Successfully!!'
        ]);
    }
    public function sub_destroy($id)
    {    
        Subcategory::where('id', $id)->delete();
        return response()->json([
            'message'=>'Sub Category Deleted Successfully!!'
        ]);
    }
}
