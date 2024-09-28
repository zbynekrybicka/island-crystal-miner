<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

use App\Models\UserGetter;
use App\Models\EquipmentSelect;

class EquipmentSelectController extends BaseController
{
    use ErrorResponseTrait;

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
                return $this->errorResponse($error);
            }
            if (!$equipmentSelect($machineId, true, $error)) {
                return $this->errorResponse($error);
            }
            return response(null, 204);
        } catch (\Exception $e) {
            return $this->errorResponse([500, $e->getMessage()]);
        } 
    }
}
