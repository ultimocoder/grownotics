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
        $cat = Category::paginate(10);
        return response()->json($cat);
    }
    public function getoptioncategory()
    {
        //
        $cat = Category::where('status', 1)->get();
        return response()->json($cat);
    }
    public function getcat()
    {
        $cat = Category::select('id')->get();
        return response()->json($cat);
    }
    public function getsubcat()
    {
        $cat = Subcategory::select('id')->get();
        return response()->json($cat);
    }
    public function deletemultiplecat(Request $request)
    {
        $cat = Category::whereIn('id', $request->all())->delete();
        return response()->json($cat);
    }
    public function deletemultiplesubcat(Request $request)
    {
        $cat = Subcategory::whereIn('id', $request->all())->delete();
        return response()->json($cat);
    }
    public function searchcategory(Request $request)
    {
        if(!empty($request->val)){
            $cat = Category::where('name', 'LIKE', '%'.$request->val.'%')->get();
        }else{
            $cat = [];
        }
        return response()->json($cat);
    }
    public function active_deactive_cat($id)
    {
        $data = explode(',', $id);
        Category::where('id', $data[0])->update(['status' => $data[1]]);
        return response()->json([
            'message'=>'Category Status Updated Successfully!!'
        ]);
    }
    public function active_deactive_subcat($id)
    {
        $data = explode(',', $id);
        Subcategory::where('id', $data[0])->update(['status' => $data[1]]);
        return response()->json([
            'message'=>'Sub Category Status Updated Successfully!!'
        ]);
    }
    public function getsubcategory()
    {
        //
        $sub_cat = Subcategory::select('subcategories.id', 'subcategories.status', 'subcategories.name', 'subcategories.slug', 'categories.name as cat_name')->leftJoin('categories', 'subcategories.sub_cat', '=', 'categories.id')->paginate(10);
        return response()->json($sub_cat);
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
        $request->validate([
            'name' => 'required',    
        ]);
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
        $request->validate([
            'name' => 'required',    
            'sub_cat' => 'required',    
        ]);
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
        $cat = Category::where('id', $id)->first();
        return response()->json($cat);
    }
    public function sub_edit($id)
    {
        $sub_cat = Subcategory::where('id', $id)->first();
        return response()->json($sub_cat);
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
