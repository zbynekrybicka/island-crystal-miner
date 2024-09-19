<?php
namespace App\Models;

class EquipmentChangeOwner {

    private $db;

    public function __construct(\Dibi\Connection $db) 
    {
        $this->db = $db;
    }


    public function run($user, $machine_id, $buy, &$error)
    {
        $user_id = $buy ? $user->id : null;
        $this->db->update('mining_machines', [
            'user_id' => $user_id
        ])->where('id = %u', $machine_id)->execute();
        return true;
    }

}