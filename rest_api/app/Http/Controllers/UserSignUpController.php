<?php
namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use App\Models\UserCreate;
use App\Models\UserSendEmailVerification;

class UserSignUpController extends BaseController
{


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
        try {
            if (
                $this->validateData($request, $error) &&
                $this->getData($request, $data) && 
                $userCreate->run($data, $user, $error) &&
                $userSendEmailVerification->run($user, $error)
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
