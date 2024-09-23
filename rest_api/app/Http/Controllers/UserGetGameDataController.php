<?php
namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Http\Cookie;

use App\Models\UserGetter;
use App\Models\EquipmentGetter;

class UserGetGameDataController extends BaseController
{

    private $userGetter;
    private $equipmentGetter;

    /**
     * Konstruktor
     * 
     * @param UserGetter $userGetter DI
     */
    public function __construct(UserGetter $userGetter, EquipmentGetter $equipmentGetter)
    {
        $this->userGetter = $userGetter;
        $this->equipmentGetter = $equipmentGetter;
    }


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
    public function execute(Request $request) 
    {
        $user = null;
        $error = [];
        $equipment = [];
        $cookie = null;
        try {
            if (
                $this->getCookie($request, $cookie, $error) &&
                $this->userGetter->getByAuth($cookie, $user, $error) &&
                $this->equipmentGetter->getAllByOwner($user->id, $equipment, $error)
            ) {
                return response()->json([
                    'user' => $user,
                    'equipment' => $equipment
                ], 200);
            } else {
                list($status, $message) = $error;
                return response()->json($message, $status);
            }
            ;
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }

    }
}
