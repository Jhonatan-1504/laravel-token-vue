<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;

    public function test_register()
    {
        $response = $this->postJson('/api/register', [
            "name" => "Juan",
            "email" => "juan@gmail.com",
            "password" => "123456",
            "password_confirmation"=>"123456"
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'access_token',
            'token_type',
            'user',
        ]);
    }

    public function test_login()
    {
        $this->createUser();

        $response = $this->postJson('/api/login', [
            "email" => "juan@gmail.com",
            "password" => "123456"
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'access_token',
            'token_type',
            'user',
        ]);
    }

    public function test_check_token()
    {
        $response = $this->postJsonToken("/api/checkToken");

        $response->assertStatus(200);
    }
}
