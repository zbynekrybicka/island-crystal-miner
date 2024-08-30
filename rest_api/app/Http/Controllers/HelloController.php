<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class HelloController extends BaseController
{
    private $db;

    public function __construct(\Dibi\Connection $db) {
        $this->db = $db;
    }

    public function helloWorld(Request $request) 
    {
        /*$db = new \Dibi\Connection([
            "driver" => "mysqli",
            "host" => "localhost",
            "user" => "root",
            "database" => "test"
        ]);*/
        $tables = $this->db->query("show tables")->fetchAll();
        return response()->json($tables);
    }
}
