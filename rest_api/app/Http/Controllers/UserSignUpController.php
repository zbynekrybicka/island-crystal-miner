<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class UserSignUpController extends BaseController
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
        $data = (object) $request->only(["name", "email"]);
        $error = [];
        $user = null;
        try {
            if (
                $this->validateData($data, $error) &&
                $this->userCreate->run($data, $user, $error) &&
                $this->userSendEmailVerification->run($user, $error)
            ) {
                return response(null, 201);
            } else {
                list($status, $message) = $error;
                return response()->json($message, $status);
            }
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
}
