<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

use App\Models\UserCreate;
use App\Models\UserEmailVerify;


class UserVerifyEmailController extends BaseController
{
    use ErrorResponseTrait;

    /**
     * @param Request $request
     * @return Response
     */
    public function execute(Request $request, UserGetter $userGetter, UserEmailVerify $userEmailVerify)
    {
        $token = $request->input("token");
        $error = [];
        $user = null;
        try {
            if (!$userGetter->getByVerifyingToken($token, $user, $error)) {
                return response(...$error);
            }
            if (!$userEmailVerify->run($user, $error)) {
                return response(...$error);
            }
            return response("", 204);
        } catch (\Exception $e) {
            return response($e->getMessage(), 500);
        }       
    }
}
