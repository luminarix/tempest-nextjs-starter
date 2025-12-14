<?php

declare(strict_types=1);

namespace App\Api;

use Tempest\Core\Kernel;
use Tempest\Http\ContentType;
use Tempest\Http\Response;
use Tempest\Http\Responses\Ok;
use Tempest\Router\Get;

final readonly class VersionController
{
    #[Get('/api/version')]
    #[Get('/')]
    public function __invoke(): Response
    {
        return new Ok([
            'version' => Kernel::VERSION,
        ])->setContentType(ContentType::JSON);
    }
}
