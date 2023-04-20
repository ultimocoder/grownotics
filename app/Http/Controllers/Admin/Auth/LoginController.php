<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use App\Models\User;
use Validator;
use Illuminate\Support\Str;
class LoginController extends Controller
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
}
