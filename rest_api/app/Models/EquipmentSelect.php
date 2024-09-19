<?php
namespace App\Models;

class EquipmentChangeOwner {

    private $db;

    public function __construct(\Dibi\Connection $db) 
    {
        $this->db = $db;
    }


    public function run($user, $machine_id, $select, &$error)
    {
        $this->db->update('mining_machines', [
            'selected' => $select ? 1 : 0
        ])->where('id = %u AND user_id = %u', $machine_id, $user->id)->execute();
        return true;
    }

}