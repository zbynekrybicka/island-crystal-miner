<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class MiningController extends BaseController
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
        $data = $request->input("mining_data");
        $error = [];
        $result = [];
        $user = null;
        try {
            if (
                $this->userGetter->getByAuth($user, $error) &&
                $this->mining->run($data, $result, $error)
            ) {
                return response($result, 200);
            } else {
                list($status, $message) = $error;
                return response()->json($message, $status);
            }
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }    
    }
}
