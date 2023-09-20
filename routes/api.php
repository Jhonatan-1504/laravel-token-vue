<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("login", [AuthController::class, "login"]);
Route::post("register", [AuthController::class, "register"]);
Route::post("refresh", [AuthController::class, "refresh"]);
Route::post("checkToken", [AuthController::class, "checkToken"]);
Route::post("logout", [AuthController::class, "logout"]);

Route::middleware("jwt.verify")->group(function () {
  Route::post("admin", [AdminController::class, "index"]);
});
