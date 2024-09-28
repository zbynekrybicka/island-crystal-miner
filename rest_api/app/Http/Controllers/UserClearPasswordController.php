<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

use App\Models\UserGetter;
use App\Models\UserClearPassword;
use App\Models\UserSendEmailVerification;


class UserClearPasswordController extends BaseController
{
    use ErrorResponseTrait;


    /**
     * @param Request $request
     * @return Response
     */
    public function execute(Request $request, UserGetter $userGetter, UserClearPassword $userClearPassword, UserSendEmailVerification $userSendEmailVerification)
    {
        $email = $request->input("email");
        $error = [];
        $user = null;
        try {
            if (!$userGetter->getByEmail($email, $user, $error)) {
                return $this->errorResponse($error);
            }
            if (!$userClearPassword->run($user, null, $error)) {
                return $this->errorResponse($error);
            }
            if (!$userSendEmailVerification->run($user, $error)) {
                return $this->errorResponse($error);
            }
            return response(null, 204);
        } catch (\Exception $e) {
            return $this->errorResponse([500, $e->getMessage()]);
        }          
    }
}
