<?php

declare(strict_types=1);

namespace App\ResponseProcessors;

use Tempest\Http\Response;
use Tempest\Router\ResponseProcessor;

use function Tempest\env;

final readonly class CorsResponseProcessor implements ResponseProcessor
{
    public function process(Response $response): Response
    {
        return $response
            ->addHeader('Access-Control-Allow-Origin', env('FRONTEND_URL'))
            ->addHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->addHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
            ->addHeader('Access-Control-Allow-Credentials', 'true');
    }
}
