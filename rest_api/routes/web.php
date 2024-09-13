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

$router->get('/', function () use ($router) {
    return $router->app->version();
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
