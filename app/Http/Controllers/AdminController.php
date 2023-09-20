<?php

namespace App\Http\Controllers;

class AdminController extends Controller
{
    public function index(){
        return response()->json(["success"=>true,"message"=>"Is goind to dashboard"]);
    }
}
