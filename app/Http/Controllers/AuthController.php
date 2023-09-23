<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:api")->except("login", "register");
    }


    //*********************** */
    /*         LOGIN          
    //*********************** */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required|email",
            "password" => "required"
        ]);

        if ($validator->fails()) return $this->respondWithError(["errors" => $validator->errors()]);

        $user = User::where("email", $request->email)->first();

        if (!$user) {
            return $this->respondWithError(["message" => "Usuario no encontrado"], 404);
        }

        if (!Hash::check($request->password, $user->password)) {
            return $this->respondWithError(["message" => "Contraseña incorrecta"]);
        }

        if (!$token = Auth::login($user)) {
            return response()->json([
                "success" => false,
                "error" => 'Unauthorized'
            ], 401);
        }

        return $this->respondWithToken($token, [
            "user" => $user
        ]);
    }

    //*********************** */
    /*   REGISTER            
    //*********************** */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required|max:255",
            "email" => "required|email|max:255|unique:users",
            "password" => "required|min:6|confirmed"
        ]);

        if ($validator->fails()) return $this->respondWithError(["errors" => $validator->errors()]);

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password)
        ]);

        $token = Auth::login($user);

        return $this->respondWithToken($token, [
            "message" => "User registered successfully",
            "user" => $user,
        ]);
    }

    public function checkToken()
    {
        return response()->json(["success" => true], 200);
    }

    public function refresh()
    {
        $new_token = Auth::refresh();

        return $this->respondWithToken($new_token, [
            "user" => Auth::user()
        ]);
    }

    public function logout()
    {
        Auth::logout();

        return response()->json(["success" => true, "message" => "Successfully logged out"], 200);
    }

    protected function respondWithToken($token, $options = [])
    {
        return response()->json([
            'success' => true,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            ...$options
        ], 200);
    }

    protected function respondWithError($options = [], $status = 400)
    {
        return response()->json([
            'success' => false,
            ...$options
        ], $status);
    }
}
