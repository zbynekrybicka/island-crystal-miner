namespace App\Http\Controllers;

trait ErrorResponseTrait {

    private function errorResponse($response) {
        list($code, $message);
        return response($message, $code);
    }

}