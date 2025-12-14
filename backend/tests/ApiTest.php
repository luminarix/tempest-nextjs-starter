<?php

declare(strict_types=1);

namespace Tests;

use PHPUnit\Framework\Attributes\Test;
use Tempest\Core\Kernel;

/**
 * @internal
 */
final class ApiTest extends IntegrationTestCase
{
    #[Test]
    public function can_see_api_version(): void
    {
        $this->http
            ->get('/api/version')
            ->assertOk()
            ->assertJson([
                'version' => Kernel::VERSION,
            ]);
    }
}
