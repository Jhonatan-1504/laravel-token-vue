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

Route::post("admin", [AdminController::class, "index"]);

Route::post("login", [AuthController::class, "login"]);
Route::post("register", [AuthController::class, "register"]);
Route::post("refresh", [AuthController::class, "refresh"]);
Route::post("checkToken", [AuthController::class, "checkToken"]);

// Route::controller(AuthController::class)->group(function () {
//     Route::post("login", "login");
//     Route::post("register", "register");
//     Route::post("checkToken", "checkToken");
//     Route::post("logout", "logout");
// });
