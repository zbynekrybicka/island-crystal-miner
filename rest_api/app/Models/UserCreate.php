<?php
namespace App\Models;

class UserCreate {

    private $db;

    public function __construct(\Dibi\Connection $db) 
    {
        $this->db = $db;
    }


    public function run($data, &$user, &$error)
    {
        $this->db->insert('users', [
            'name' => $data->name,
            'email' => $data->email,
        ])->execute();
        $user = (object) $data;
        $user->id = $this->db->getInsertId();
        return true;
    }

}