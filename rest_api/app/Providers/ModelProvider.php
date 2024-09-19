<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ModelProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $dibi = new \Dibi\Connection([
            "driver" => "mysqli",
            "host" => "localhost",
            "user" => "root",
            "database" => "test"
        ]);

        $this->app->bind(\App\Models\UserGetter::class, function($app) use ($dibi) {
            return new \App\Models\UserGetter($dibi);
        });
        $this->app->bind(\App\Models\UserCreate::class, function($app) use ($dibi) {
            return new \App\Models\UserCreate($dibi);
        });
        $this->app->bind(\App\Models\UserJWTencode::class, function($app) use ($dibi) {
            return new \App\Models\UserJWTencode($dibi);
        });
        $this->app->bind(\App\Models\UserSendEmailVerification::class, function($app) use ($dibi) {
            return new \App\Models\UserSendEmailVerification($dibi);
        });
        $this->app->bind(\App\Models\EquipmentGetter::class, function($app) use ($dibi) {
            return new \App\Models\EquipmentGetter($dibi);
        });
    }
}
