<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
// use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(){
        return response()->json(["success"=>true,"message"=>"Is goind to dashboard"]);
    }
}
