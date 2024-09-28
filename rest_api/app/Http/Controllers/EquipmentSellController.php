<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

use App\Models\UserGetter;
use App\Models\EquipmentChangeOwner;

class EquipmentSellController extends BaseController
{
    use ErrorResponseTrait;

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
            if (!$this->userGetter->getByAuth($user, $error)) {
                return $this->errorResponse($error);
            }
            if (!$this->equipmentChangeOwner($user, $machineId, false, $error)) {
                return $this->errorResponse($error);
            }
            return response(null, 204);
        } catch (\Exception $e) {
            return $this->errorResponse([500, $e->getMessage()]);
        } 
    }
}
