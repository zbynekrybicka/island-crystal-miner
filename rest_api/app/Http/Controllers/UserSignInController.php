<?php
namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;

use Symfony\Component\HttpFoundation\Cookie;

use App\Models\UserGetter;
use App\Models\UserJWTencode;



class UserSignInController extends BaseController
{
    use ErrorResponseTrait;


    /**
     * Validuje vstupní data
     * Kontroluje, jestli existuje email a password
     * 
     * @param object $data vstupní data
     * @param array &$error nositel erroru
     * @return boolean - true = ok, false = error
     */
    private function validateData($data, &$error) 
    {
        $data = (array) $data;
        $error = [400, []];
        $messageIndex = 1;
        if (!array_key_exists("email", $data)) {
            array_push($error[$messageIndex], "Invalid email input");
        }
        if (!array_key_exists("password", $data)) {
            array_push($error[$messageIndex], "Invalid password input");
        }
        return !count($error[$messageIndex]);
    }


    /**
     * Verifikace hesla
     * 
     * @param string $password heslo v plain textu (od uživatele)
     * @param string $hash pro verifikaci BCRYPT
     * @param array &$error nositel erroru
     * @return boolean - true = ok, false = error
     */
    private function passwordVerify($password, $hash, &$error)
    {
        if (password_verify($password, $hash)) {
            return true;
        } else {
            $error = [400, "Chybné heslo"];
            return false;
        }
    }


    /**
     * @param Request $request
     * @return Response
     */
    public function execute(Request $request, UserGetter $userGetter, UserJWTencode $userJWTencode) 
    {
        $data = (object) $request->only(['email', 'password']);
        $user = null;
        $jwt = null;
        $error = [];
        try {
            if (!$this->validateData($data, $error)) {
                return $this->errorResponse($error);
            }
            if (!$userGetter->getByEmail($data->email, $user, $error)) {
                return $this->errorResponse($error);
            }
            if (!$this->passwordVerify($data->password, $user->password, $error)) {
                return $this->errorResponse($error);
            }
            if (!$userJWTencode->run($user->id, $jwt)) {
                return $this->errorResponse($error);
            }
            return response()->json($user, 200)->withCookie(Cookie::create("Authorization", "Bearer " . $jwt, time() + 3600));
        } catch (\Exception $e) {
            return $this->errorResponse([500, $e->getMessage()]);
        }

    }
}
