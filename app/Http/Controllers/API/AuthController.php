<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use App\Models\User;
use Validator;
use Hash;
use Session;
use Illuminate\Support\Str;
class AuthController extends Controller
{
  private $apiToken;
   public function __construct()
    {
    $this->apiToken = uniqid(base64_encode(Str::random(40)));
    }
    public function login(Request $request){ 
       
            //User check
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
          $user = Auth::user(); 
        //Setting login response 
        $success['token'] = $this->apiToken;
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

    public function customRegistration(Request $request)
    {  
        $request->validate([
            'username' => 'required',
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
        'username' => $data['username'],
        'email' => $data['email'],
        'password' => Hash::make($data['password'])
      ]);
    }  
 
}
