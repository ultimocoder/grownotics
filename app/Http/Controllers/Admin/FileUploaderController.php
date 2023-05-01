<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Media ;
class FileUploaderController extends Controller
{
    //
   public function index(){
   
    $media = Media::orderBy('id','desc')->paginate(10);
    return response()->json($media);

   }

    public function store(Request $request){
         try {
         $original_name=$request->file->getClientOriginalName();
         $fileName = rand(). '_' . time() . '.'. $request->file->extension();  
         $type = $request->file->getClientMimeType();
         $size = $request->file->getSize();
         $request->file->move(public_path('media'), $fileName);
         $media =new Media;
         $media->name =$fileName;
         $media->size =$size;
         $media->type=$type;
         $media->extension=$request->file->getClientOriginalExtension();
         $media->original_name=$original_name;

         $media->save();
         return response()->json([
            'message'=>'File add Successfully!!',
            'name' =>$fileName
        ]);
         }catch(\Exception $e){
            return response()->json([
                'message'=>'Something went worng'
            ]);
          }

    }
    public function delete($id){
       $name= Media::where('id', $id)->first()->name;
       $image_path = public_path('media/'.$name);
       if(file_exists($image_path)){
        unlink($image_path);
      }
        Media::where('id', $id)->delete();

        return response()->json([
            'message'=>'Media Deleted Successfully!!'
        ]);
    }
}
