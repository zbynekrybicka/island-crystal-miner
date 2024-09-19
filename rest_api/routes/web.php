<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use Symfony\Component\HttpFoundation\Cookie;
use Illuminate\Http\Request;

$router->get('/', function (Request $request) use ($router) {
    // return response("", 204)->withCookie(Cookie::create("Authorization", "Bearer", time() + 3600));
    return json_encode($request->cookie("Authorization"));
});

$router->get('/users', ['uses' => 'UserGetGameDataController@execute']);
$router->get('/users/verify-email', ['uses' => 'UserVerifyEmailController@execute']);


$router->post('/users/sign-in', ['uses' => 'UserSignInController@execute']);
$router->post('/users/sign-up', ['uses' => 'UserSignUpController@execute']);
$router->post('/users/clear-password', ['uses' => 'UserClearPasswordController@execute']);
$router->post('/users/set-password', ['uses' => 'UserSetPasswordController@execute']);
$router->post('/equipment/buy', ['uses' => 'EquipmentBuyController@execute']);
$router->post('/equipment/sell', ['uses' => 'EquipmentSellController@execute']);
$router->post('/equipment/select', ['uses' => 'EquipmentSelectController@execute']);
$router->post('/equipment/dismiss', ['uses' => 'EquipmentDismissController@execute']);
$router->post('/mining', ['uses' => 'MiningController@execute']);
