<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AdminController;
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

Route::group(["middleware" => ["jwt.verify"]], function () {
    // auth
    Route::post("checkToken", [AuthController::class, "checkToken"]);
    Route::post("logout", [AuthController::class, "logout"]);

    // admin
    Route::post("admin", [AdminController::class, "index"]);
});
