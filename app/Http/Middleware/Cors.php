<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    public function handle($request, Closure $next)
    {
        $allowedOrigins = [
            'http://127.0.0.1:8000'
        ];

        if (in_array($request->header('Origin'), $allowedOrigins)) {
            $response = $next($request);

            $response->headers->set('Access-Control-Allow-Origin', $request->header('Origin'));
            $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            $response->headers->set('Access-Control-Allow-Credentials', 'true');

            return $response;
        }

        return $next($request);
    }
}
