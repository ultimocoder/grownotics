<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Str;
use DB;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
class AuthController extends Controller
{
    // public function login(Request $request){ 
    //   $request->validate([
    //     'email' => 'required|email',
    //     'password' => 'required',
    //   ]);

    //   try
    //   {
    //     if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
    //       $user = Auth::user(); 
    //       $success['name'] =  $user;
    //       return response()->json([
    //         'status' => 'success',
    //         'data' => $success
    //       ]); 
    //     }else{
    //       $error = 'Email Password Not Valid';
    //     return response()->json([
    //       'status' => 'error',
    //       'data' => $error
    //     ]);

    //     }
    //   } catch (\Exception $e) {
    //     $error = 'Email Password Not Valid';
    //     return response()->json([
    //       'status' => 'error',
    //       'data' => $error
    //     ]);
    //     } 
    // }
       
    public function login(Request $request){
      $validator = Validator::make($request->all(), [
        'email' => 'required|email',
        'password' => 'required',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 422);
  }

    if (!$token = JWTAuth::attempt($validator->validated())) {
    return response()->json(['error' => 'Email or password is invalid'], 401);
 }
return $this->createNewToken($token);
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
    public function refresh() {
      return $this->createNewToken(auth()->refresh());
    } 
  public function userProfile() {
    return response()->json(auth()->user());
   }
   protected function createNewToken($token){
    return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL() * 60,
        'user' => auth()->user(),
        'status'=>"success"
    ]);
}


     public function submitForgetPasswordForm(Request $request)
      {

          $request->validate([
              'email' => 'required|email|exists:users',
          ]);
  
          $token = Str::random(64);
   
          DB::table('password_resets')->insert([
              'email' => $request->email, 
              'token' => $token, 
              'created_at' => Carbon::now()
            ]);
  
          Mail::send('email.forgetPassword', ['token' => $token], function($message) use($request){
              $message->to($request->email);
              $message->subject('Reset Password');
          });
        return response()->json(
            [
                'status' => 'success',
                'data' => 'We have e-mailed your password reset link!'
            ]
        );
        
      }

       public function submitResetPasswordForm(Request $request)
      {
          $request->validate([
              'email' => 'required|email|exists:users',
              'password' => 'required|string|min:6|confirmed',
              'password_confirmation' => 'required'
          ]);
  
          $updatePassword = DB::table('password_resets')
                              ->where([
                                'email' => $request->email, 
                                'token' => $request->token
                              ])
                              ->first();
  
          if(!$updatePassword){
            return response()->json(
            [
                'status' => 'error',
                'data' => 'Invalid token!'
            ]);
             
          }
  
          $user = User::where('email', $request->email)
                      ->update(['password' => Hash::make($request->password)]);
 
          DB::table('password_resets')->where(['email'=> $request->email])->delete();
          return response()->json(
            [
                'status' => 'success',
                'data' => 'Your password has been changed!'
            ]
        );
         
      }
      public function logout() {
        auth()->logout();
        return response()->json(['message' => 'User successfully signed out']);
    }

}