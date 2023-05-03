<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Str;
use DB;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
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
      public function updatePassword(Request $request) {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password'
        ]);

        $user = User::where('email', $request->email)->first();
        if ($user) {
            $user['is_verified'] = 0;
            $user['token'] = '';
            $user['password'] = Hash::make($request->password);
            $user->save();
            return redirect()->route('login')->with('success', 'Success! password has been changed');
        }
        return redirect()->route('forgot-password')->with('failed', 'Failed! something went wrong');
    }
}