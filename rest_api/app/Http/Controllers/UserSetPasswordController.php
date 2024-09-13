<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class UserSetPasswordController extends BaseController
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
        $data = (object) $request->only(["password", "confirm"]);
        $error = [];
        $user = null;
        try {
            if (
                $this-validateData($data, $error) &&
                $this->userGetter->getByAuth($user, $error) &&
                $this->userSetPassword->run($user, $data->password, $error) &&
                $this->userSendPasswordConfirmation($user, $error)
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
