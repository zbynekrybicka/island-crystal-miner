<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class UserClearPasswordController extends BaseController
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
        $email = $request->input("email");
        $error = [];
        $user = null;
        try {
            if (
                $this->userGetter->getByEmail($email, $user, $error) &&
                $this->userClearPassword->run($user, null, $error) &&
                $this->userSendEmailVerification($user, $error)
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
