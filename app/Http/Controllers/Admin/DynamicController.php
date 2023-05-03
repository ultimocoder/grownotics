<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Dynamic;
use Str;

class DynamicController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $page = Dynamic::paginate(10);
        return response()->json($page);
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
            Dynamic::where('id', $request->id)->update(['name' => $request->name, 'text' => $request->text, 'slug' => $request->slug]);
            return response()->json([
                'message'=>'Daynamic Page Update Successfully!!'
            ]);
        }else{
            $request['slug'] = Str::slug($request->name);
            Dynamic::create($request->post());
            return response()->json([
                'message'=>'Daynamic Page Created Successfully!!'
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
        $cat = Dynamic::where('id', $id)->first();
        return response()->json($cat);
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
        Dynamic::where('id', $id)->delete();
        return response()->json([
            'message'=>'Daynamic Page Deleted Successfully!!'
        ]);
    }
}
