<?php
namespace App\Models;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;


class UserGetter {

    private $db;

    public function __construct(\Dibi\Connection $db) {
        $this->db = $db;
    }

    public function getByEmail($email, &$result, &$error)
    {
        $user = $this->db->select('*')->from('users')->where('email = %s', $email)->fetch();
        if ($user) {
            $result = $user;
            return true;
        } else {
            $error = ['userNotFound' => "Uživatel s e-mailem $email neexistuje."];
            return false;
        }
    }


    public function getByAuth($authToken, &$user, &$error) 
    {
        if (!$authToken) {
            $error = ["Token not set", 400];
            return false;
        }
        $authToken = str_replace("Bearer ", "", $authToken);
        $key = env("JWT_KEY");
        $payload = JWT::decode($authToken, new Key($key, 'HS256'));
        $row = $this->db->select('*')->from('users')->where('id = %s', $payload->id)->fetch();
        if ($row) {
            $user = (object) $row;
            return true;
        } else {
            $error = ["User not found", 400];
        }
    }

}