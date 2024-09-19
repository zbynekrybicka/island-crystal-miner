<?php
namespace App\Models;

use Firebase\JWT\JWT;


class UserSendEmailVerification {

    private $db;

    public function __construct(\Dibi\Connection $db) {
        $this->db = $db;
    }



    public function run($user, &$error)
    {
        $key = env("JWT_EMAIL_KEY");
        if (strlen($key) < 100) {
            throw new \Exception("JWT_KEY not valid");
        }
        $jwt = JWT::encode(['id' => $user->id, 'email' => $user->email], $key, 'HS256');
        mail($user->email, "Island Crystal Miner - registrace", "https://island-crystal-miner.com/verify-email.php?token=" . $jwt);
        $error = [204, ""];
        return false;
    }


}