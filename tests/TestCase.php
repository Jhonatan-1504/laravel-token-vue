<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function createUser()
    {
        return User::factory()->create([
            "name" => "Juan",
            "email" => "juan@gmail.com",
            "password" => Hash::make("123456")
        ]);
    }

    protected function createUserAndToken()
    {
        $user = $this->createUser();

        $token = Auth::login($user);

        return $token;
    }

    protected function postJsonToken($uri, $payload = [], $headers = [])
    {
        $token = $this->createUserAndToken();

        $response = $this->withHeaders([
            'Authorization' => 'Bearer ' . $token,
        ])->postJson($uri, $payload, $headers);

        return $response;
    }
}
