<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brand;
use Illuminate\Support\Str;

class BrandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $brands = Brand::paginate(10);
        return response()->json($brands);
    }
    public function getoptionbrand()
    {
        //
        $brands = Brand::where('status', 1)->get();
        return response()->json($brands);
    }
    public function active_deactive_brand($id)
    {
        //
        $data = explode(',', $id);
        Brand::where('id', $data[0])->update(['status' => $data[1]]);
        return response()->json([
            'message'=>'Brand Status Updated Successfully!!'
        ]);
    }
    public function getsubcategory()
    {
        //
        $brands = Brand::select('*')->get();
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
        $request->validate([
            'name' => 'required|unique:brands,name,' .$request->id,
            
             ]);
        if(!empty($request->id)){
           $request['slug'] = Str::slug($request->name);
            Brand::where('id', $request->id)->update(['name' => $request->name, 'slug' => $request->slug]);
            return response()->json([
                'message'=>'Brand Update Successfully!!'
            ]);
        }else{


            $request['slug'] = Str::slug($request->name);
            Brand::create($request->post());
            return response()->json([
                'message'=>'Brand Created Successfully!!'
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
        $brand = Brand::where('id', $id)->first();
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
        Brand::where('id', $id)->delete();
        return response()->json([
            'message'=>'Brand Deleted Successfully!!'
        ]);
    }
  
}
