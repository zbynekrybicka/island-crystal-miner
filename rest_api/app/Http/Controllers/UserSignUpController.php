<?php
namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\UserCreate;
use App\Models\UserSendEmailVerification;

class UserSignUpController extends BaseController
{
    use ErrorResponseTrait;


    private function validateData(Request $request, &$data, &$error)
    {
        if (
            $request->has("name") &&
            $request->has("email")
        ) {
            return true;
        } else {
            $error = [400, "Missing required values."];
            return false;
        }
    }


    private function getData($request, &$data) {
        $data = (object) $request->only(["name", "email"]);
        return true;
    }


    /**
     * @param Request $request
     * @return Response
     */
    public function execute(Request $request, UserCreate $userCreate, UserSendEmailVerification $userSendEmailVerification)
    {
        $error = [];
        $user = null;
        $data = null;
        try {
            if (!$this->validateData($request, $error)) {
                return $this->errorResponse($error);
            }
            if (!$this->getData($request, $data)) {
                return $this->errorResponse($error);
            }
            if (!$userCreate->run($data, $user, $error)) {
                return $this->errorResponse($error);
            }
            if (!$userSendEmailVerification->run($user, $error)) {
                return $this->errorResponse($error);
            }
            return response(null, 201);
        } catch (\Exception $e) {
            return $this->errorResponse([500, $e->getMessage()]);
        }
    }
}
