<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class UserVerifyEmailController extends BaseController
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
        $token = $request->input("token");
        $error = [];
        $user = null;
        try {
            if (
                $this->userGetter->getByVerifyingToken($token, $user, $error) &&
                $this->userEmailVerify->run($user, $error)
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
