<?php

namespace App\Http\Controllers;

use App\Models\UserGetter;
use App\Models\UserSetPassword;
use App\Models\UserSendPasswordConfirmation;

use Laravel\Lumen\Routing\Controller as BaseController;

class UserSetPasswordController extends BaseController
{
    use ErrorResponseTrait;

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
    public function execute(Request $request, UserGetter $userGetter, UserSetPassword $userSetPassword, UserSendPasswordConfirmation $userSendPasswordConfirmation)
    {
        $data = (object) $request->only(["password", "confirm"]);
        $error = [];
        $user = null;
        try {
            if (!$this-validateData($data, $error)) {
                return $this->errorResponse($error);
            }
            if (!$userGetter->getByAuth($user, $error)) {
                return $this->errorResponse($error);                
            }
            if (!$userSetPassword->run($user, $data->password, $error)) {
                return $this->errorResponse($error);
            }
            if (!$userSendPasswordConfirmation($user, $error)) {
                return $this->errorResponse($error);
            }
            return response(null, 204);
        } catch (\Exception $e) {
            return $this->errorResponse([500, $e->getMessage()]);
        }    
    }
}
