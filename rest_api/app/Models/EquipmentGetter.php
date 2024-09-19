<?php
namespace App\Models;

class EquipmentGetter {

    private $db;

    public function __construct(\Dibi\Connection $db) {
        $this->db = $db;
    }


    public function getAllByOwner($userId, &$equipment, &$error)
    {
        $equipment = $this->db->select('*')->from('mining_machines')->where('user_id = %u OR user_id IS NULL', $userId)->fetchAssoc("id");
        return true;
    }

}