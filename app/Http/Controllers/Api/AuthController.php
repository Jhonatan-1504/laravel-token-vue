<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    public function register(Request $request) {
        $this->validate($request,[
            "name"=>"required|max:255",
            "email"=>"required|email|max:255|unique:users",
            "password"=>"required|min:6|confirmed"
        ]);

        return response()->json(["success"=>false],200);
    }

    public function login(Request $request)
    {
        $credentails = $request->only('email', 'password');

        if (!$token = auth()->attempt($credentails)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function checkToken()
    {
        return response()->json(["success" => true], 200);
    }

    public function logout()
    {
        $logout = auth()->logout();

        return response()->json(["success" => true], 200);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            // 'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
