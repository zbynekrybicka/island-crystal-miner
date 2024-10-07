<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

use App\Models\UserGetter;
use App\Models\EquipmentSelect;


class EquipmentDismissController extends BaseController
{

    /**
     * @param Request $request
     * @return Response
     */
    public function execute(Request $request, UserGetter $userGetter, EquipmentSelect $equipmentSelect)
    {
        $machineId = $request->input("machine_id");
        $error = [];
        $user = null;
        try {
            if (!$userGetter->getByAuth($user, $error)) {
                return response(...$error);
            }
            if (!$equipmentSelect($machineId, false, $error)) {
                return response(...$error);
            }
            return response(null, 204);
        } catch (\Exception $e) {
            return response($e->getMessage(), 500);
        } 
    }
}
