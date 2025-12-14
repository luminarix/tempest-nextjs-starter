# Tempest + Next.js Starter Pack

A modern full-stack starter template combining **Tempest PHP Framework** for the backend API and **Next.js** for the frontend dashboard.

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Backend Framework | Tempest | 2.0 |
| PHP | PHP | 8.4 |
| Frontend Framework | Next.js | 16 |
| React | React | 19 |
| State Management | TanStack Query | 5 |
| Styling | Tailwind CSS | 4 |
| PHP Tooling | Mago | 1.0 beta |
| JS Tooling | Biome | 2.2 |
| Testing | PHPUnit | 12 |
| Containerization | Docker | - |

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose
- (Optional for local development without Docker):
  - PHP 8.4+
  - Node.js 20+ with pnpm or pnpm (preferred)
  - Composer

## Quick Start

### 1. Clone and Configure

```bash
git clone <repository-url> my-project # Or use the Github "Use this template" button and clone your repository
cd my-project

# Copy environment files
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

### 2. Start with Docker

```bash
docker compose up -d
```

That's it! Your application is now running:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost

### 3. Verify Installation

Open http://localhost:3000 in your browser for the frontend.
Open http://localhost in your browser for the backend API.

## Local Development (Without Docker)

### Backend Setup

```bash
cd backend

# Install dependencies
composer install

# Generate application key
./tempest key:generate

# Start the development server
./tempest serve
```

The API will be available at http://localhost:8000

### Frontend Setup

```bash
cd frontend

# Install dependencies
pnpm install

# Update .env for local backend
echo "API_URL=http://localhost:8000" > .env.local
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" >> .env.local

# Start development server
pnpm run dev
```

The frontend will be available at http://localhost:3000

## Project Structure

```
.
├── backend/                 # Tempest PHP API
│   ├── app/
│   │   ├── Api/            # API Controllers
│   │   └── ResponseProcessors/  # Response processors (CORS, etc.)
│   ├── tests/              # PHPUnit tests
│   ├── composer.json
│   ├── phpunit.xml
│   ├── mago.toml           # PHP formatter config
│   └── tempest             # CLI entrypoint
│
├── frontend/               # Next.js Application
│   ├── src/
│   │   ├── app/           # Pages and layouts (App Router)
│   │   └── lib/           # Utilities, hooks, providers
│   ├── package.json
│   ├── biome.json         # Linter/formatter config
│   └── next.config.ts
│
├── docker-compose.yml      # Container orchestration
├── Backend.dockerfile
└── Frontend.dockerfile
```

## Available Commands

### Backend

Run from the `tempest` container:

| Command | Description |
|---------|-------------|
| `composer qa` | Run all checks (format, test, lint) |
| `composer phpunit` | Run tests |
| `composer fmt` | Format code with Mago |
| `composer lint` | Lint code with Mago |
| `./tempest` | Tempest CLI (run with no args for help) |
| `./tempest serve` | Start development server |
| `./tempest discovery:status` | Check discovery cache status |

### Frontend

Run from the `nextjs` container:

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server |
| `pnpm run build` | Create production build |
| `pnpm start` | Run production server |
| `pnpm run lint` | Lint with Biome |
| `pnpm run format` | Format with Biome |

### Docker

Run from the project root:

| Command | Description |
|---------|-------------|
| `docker compose up -d` | Start all services |
| `docker compose down` | Stop all services |
| `docker compose logs -f` | View logs |
| `docker compose exec tempest bash` | Shell into backend container |
| `docker compose exec nextjs bash` | Shell into frontend container |

## Environment Configuration

### Backend (`backend/.env`)

```env
ENVIRONMENT=local          # local, staging, production
BASE_URI=http://localhost:8000
FRONTEND_URL=http://localhost:3000  # CORS allowed origin
```

### Frontend (`frontend/.env`)

```env
API_URL=http://php:8080              # Server-side (Docker internal, use localhost if you don't use Docker)
NEXT_PUBLIC_API_URL=http://localhost  # Client-side (browser)
```

## Testing

### Backend Tests

```bash
cd backend

# Run all tests
docker exec tempest composer phpunit

# Run specific test file
docker exec tempest ./vendor/bin/phpunit tests/ApiTest.php

# Run specific test method
docker exec tempest ./vendor/bin/phpunit --filter testVersionEndpoint
```

## Code Quality

Both backend and frontend have pre-configured linting and formatting:

```bash
# Backend - run all quality checks
cd backend && composer qa

# Frontend - lint and format
cd frontend && pnpm run lint && pnpm run format
```

## CORS Configuration

CORS is handled by `CorsResponseProcessor` in the backend. To modify allowed origins, update `backend/.env`:

```env
FRONTEND_URL=http://localhost:3000
```

For multiple origins or more complex CORS rules, modify `backend/app/ResponseProcessors/CorsResponseProcessor.php`.
