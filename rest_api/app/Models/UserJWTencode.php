<?php
namespace App\Models;

use Firebase\JWT\JWT;

class UserJWTencode {


    /**
     * Vytvoří JWT token z ID uživatele
     * @param $userId ID uživatele, nekontroluje se, zda existuje.
     * @param &$jwt výsledný token
     * @return true
     */
    public function run($userId, &$jwt) 
    {
        $key = env("JWT_KEY");
        if (strlen($key) < 100) {
            throw new \Exception("JWT_KEY not valid");
        }
        $jwt = JWT::encode(['id' => $userId], $key, 'HS256');
        return true;
    }

}