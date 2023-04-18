<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use App\Models\User;
class LoginController extends Controller
{
    public function login(Request $request){ 
        $input = $request->all();
      $validator =  $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {    
            return response()->json($validator->messages(), 400);
        }
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
          $user = Auth::user(); 
          $success['name'] =  $user->name;
          return response()->json([
            'status' => 'success',
            'data' => $success
          ]); 
        } else { 
          return response()->json([
            'status' => 'error',
            'data' => 'Unauthorized Access'
          ]); 
        } 
      }
}
