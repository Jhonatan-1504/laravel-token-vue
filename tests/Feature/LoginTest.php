<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class LoginTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_register(){
        $response = $this->postJson('/api/register', [
            "name"=>"Juan",
            "email"=>"juan@gmail.com",
            "password"=>"123456"
        ]);

        $response->assertStatus(200);
    }

    public function test_login()
    {
        User::factory()->create([
            "name"=>"Juan",
            "email"=>"juan@gmail.com",
            "password"=> Hash::make("123456")
        ]);

        $response = $this->postJson('/api/login', [
            "email"=>"juan@gmail.com",
            "password"=>"123456"
        ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'access_token',
            'token_type',
            'user',
        ]);
    }
}
