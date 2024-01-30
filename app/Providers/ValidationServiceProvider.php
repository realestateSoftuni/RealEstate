<?php

namespace App\Providers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class ValidationServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot()
    {
        $this->app['validator']->extendImplicit('array_dot', function ($attribute, $value, $parameters, $validator) {
            $validator->addReplacer('array_dot', function ($message, $attribute, $rule, $parameters) {
                return str_replace(['*', '.0'], ['.*', ''], $message);
            });

            return true;
        });
    }
}
