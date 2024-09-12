<?php
namespace App\Models;


class UserGetter {

    private $db;

    public function __construct(\Dibi\Connection $db) {
        $this->db = $db;
    }

    public function getByEmail($email, &$result, &$error)
    {
        $user = $this->db->select('*')->from('users')->where('username = %s', $email)->fetch();
        if ($user) {
            $result = $user;
            return true;
        } else {
            $error = ['userNotFound' => "Uživatel s e-mailem $email neexistuje."];
            return false;
        }
    }

}