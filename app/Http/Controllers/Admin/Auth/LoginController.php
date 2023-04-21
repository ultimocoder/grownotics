<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth; 
use App\Models\User;
class LoginController extends Controller
{
    public function login(Request $request){ 
      $request->validate([
        'email' => 'required|email',
        'password' => 'required',
      ]);

      try
      {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
          $user = Auth::user(); 
          $success['name'] =  $user;
          return response()->json([
            'status' => 'success',
            'data' => $success
          ]); 
        }else{
          $error = 'Email Password Not Valid';
        return response()->json([
          'status' => 'error',
          'data' => $error
        ]);

        }
      } catch (\Exception $e) {
        $error = 'Email Password Not Valid';
        return response()->json([
          'status' => 'error',
          'data' => $error
        ]);
        } 
    }
     public function registration(Request $request)
    {  
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);
            
        $data = $request->all();
        $check = $this->create($data);
          return response()->json(
            [
                'status' => 'success',
                'data' => 'Registration is completed'
            ]
        );

    }
    public function create(array $data)
    {
      return User::create([
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => Hash::make($data['password'])
      ]);
    }  
}