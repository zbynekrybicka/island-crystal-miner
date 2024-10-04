<?php
namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Http\Cookie;

use App\Models\UserGetter;
use App\Models\EquipmentGetter;

class UserGetGameDataController extends BaseController
{


    private function getCookie(Request $request, &$cookie, &$error) 
    {
        $cookie = $request->cookie("Authorization");
        if (!$cookie) {
            $error = ["", 204];
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
                return response(...$error);
            }
            $user = null;
            if (!$userGetter->getByAuth($cookie, $user, $error)) {
                return response(...$error);
            }
            $equipment = [];
            if (!$equipmentGetter->getAllByOwner($user->id, $equipment, $error)) {
                return response(...$error);
            }
            return response()->json([
                'user' => $user,
                'equipment' => $equipment
            ], 200);
        } catch (\Exception $e) {
            return response($e->getMessage(), 500);
        }

    }
}
