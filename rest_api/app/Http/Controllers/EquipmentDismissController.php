<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class EquipmentDismissController extends BaseController
{

    /**
     * Konstruktor
     * 
     */
    public function __constructor()
    {

    }


    /**
     * @param Request $request
     * @return Response
     */
    public function execute(Request $request)
    {
        $machineId = $request->input("machine_id");
        $error = [];
        $user = null;
        try {
            if (
                $this->userGetter->getByAuth($user, $error) &&
                $this->equipmentSelect($machineId, false, $error)
            ) {
                return response(null, 204);
            } else {
                list($status, $message) = $error;
                return response()->json($message, $status);
            }
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        } 
    }
}
