<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class DatabaseServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\Dibi\Connection::class, function($app) {
            return new \Dibi\Connection([
                "driver" => "mysqli",
                "host" => "localhost",
                "user" => "root",
                "database" => "test"
            ]);
        });
    }
}
