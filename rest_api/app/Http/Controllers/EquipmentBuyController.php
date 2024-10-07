<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

use App\Models\UserGetter;
use App\Models\EquipmentChangeOwner;

class EquipmentBuyController extends BaseController
{
 
    /**
     * @param Request $request
     * @return Response
     */
    public function execute(Request $request, UserGetter $userGetter, EquipmentChangeOwner $equipmentChangeOwner)
    {
        $machineId = $request->input("machine_id");
        $error = [];
        $user = null;
        try {
            if (!$userGetter->getByAuth($user, $error)) {
                return response(...$error);
            }
            if (!$equipmentChangeOwner->run($user, $machineId, true, $error)) {
                return response(...$error);
            }
            return response(null, 204);
        } catch (\Exception $e) {
            return response($e->getMessage(), 500);
        } 
    }
}
