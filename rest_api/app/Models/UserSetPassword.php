<?php
namespace App\Models;

class UserSetPassword {

    private $db;

    public function __construct(\Dibi\Connection $db) 
    {
        $this->db = $db;
    }


    public function run($user, $password, &$error)
    {
        $verified = $password ? 1 : 0 ;
        $this->db->update('users', [
            'password' => $password,
            'verified' => $verified
        ])->where('id = %u', $user->id)->execute();
        return true;
    }

}