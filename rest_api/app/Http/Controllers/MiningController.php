<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

use App\Models\UserGetter;
use App\Models\Mining;

class MiningController extends BaseController
{
    use ErrorResponseTrait;


    /**
     * @param Request $request
     * @return Response
     */
    public function execute(Request $request, UserGetter $userGetter, Mining $mining)
    {
        $data = $request->input("mining_data");
        $error = [];
        $result = [];
        $user = null;
        try {
            if (!$userGetter->getByAuth($user, $error)) {
                return response(...$error);
            }
            if (!$mining->run($data, $result, $error)) {
                return response(...$error);
            }
            return response($result, 200);
        } catch (\Exception $e) {
            return response($e->getMessage(), 500);
        }    
    }
}
