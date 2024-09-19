<?php
namespace App\Models;

class UserEmailVerify {

    private $db;

    public function __construct(\Dibi\Connection $db) 
    {
        $this->db = $db;
    }


    public function run($user, &$error)
    {
        $this->db->update('users', [
            'verified' => 1    
        ])->where('id = %u', $user->id)->execute();
        return true;
    }

}