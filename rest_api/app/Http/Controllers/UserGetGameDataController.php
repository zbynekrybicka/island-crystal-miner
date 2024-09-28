<?php
namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Http\Cookie;

use App\Models\UserGetter;
use App\Models\EquipmentGetter;

class UserGetGameDataController extends BaseController
{
    use ErrorResponseTrait;


    private function getCookie(Request $request, &$cookie, &$error) 
    {
        $cookie = $request->cookie("Authorization");
        if (!$cookie) {
            $error = [204, ""];
            return false;
        } else {
            return true;
        }
    }


    /**
     * @param Request $request
     * @return Response
     */
    public function execute(Request $request, UserGetter $userGetter, EquipmentGetter $equipmentGetter) 
    {
        $error = [];
        $cookie = null;
        try {
            if (!$this->getCookie($request, $cookie, $error)) {
                return $this->errorResponse($error);
            }
            $user = null;
            if (!$userGetter->getByAuth($cookie, $user, $error)) {
                return $this->errorResponse($error);
            }
            $equipment = [];
            if (!$equipmentGetter->getAllByOwner($user->id, $equipment, $error)) {
                return $this->errorResponse($error);
            }
            return response()->json([
                'user' => $user,
                'equipment' => $equipment
            ], 200);
        } catch (\Exception $e) {
            return $this->errorResponse([500, $e->getMessage()]);
        }

    }
}
