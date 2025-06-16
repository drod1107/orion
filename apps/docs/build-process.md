# Build, Architecture & CI Process

_This document describes Orion's technical architecture, build/development workflow, and CI/CD pipeline. Updated as infrastructure/process evolves._

---

## Monorepo Structure

Orion is organized as a **Turborepo monorepo**:

- **apps/**

  - **web/** – Next.js frontend (React + Tailwind)
  - **api/** – Node.js backend (Express, tRPC planned)
  - **docs/** – Storybook instance (Markdown/MDX docs & UI stories)
  - **e2e/** – Playwright end-to-end test suite (separate workspace)

- **packages/**

  - **ui/** – Internal React UI component library (shared by web/docs)

- **prisma/** – Prisma database schema and migration files

All apps and packages use TypeScript. npm workspaces allow sharing code/deps across the monorepo.

---

## Build & Development Workflow

- **Start Dev Servers:**
  In the repo root, run:
  npm run dev

  - Runs both frontend (`apps/web` on [http://localhost:3000](http://localhost:3000)) and backend (`apps/api` on [http://localhost:4000](http://localhost:4000)).
  - Storybook (`apps/docs`) can be started separately:
    cd apps/docs
    npm run dev
    View docs at [http://localhost:6006](http://localhost:6006).

- **Build for Production:**
  npm run build

  - Builds all apps/packages as needed (Next.js, API, Storybook static docs).
  - Turbo only rebuilds changed parts for speed.

- **Lint & Type Check:**
  npm run lint
  npm run check-types

  - ESLint and TypeScript check the whole repo.

- **Database Migrations:**
  npx prisma migrate dev --name <migration>

  - Initialize/update DB schema per `prisma/schema.prisma`.

---

## Testing: Unit, Integration, End-to-End

- **Unit/Integration Tests (Vitest):**

  - Test files live next to code or in a `__tests__` folder (e.g. `apps/api/__tests__/api.test.ts`).
  - Run all tests:
    npm run test
  - Ensure Express app is exported (not just run) for Supertest.

- **End-to-End (E2E) Tests (Playwright):**

  - All E2E specs in `apps/e2e/tests/`.
  - Playwright config: `apps/e2e/playwright.config.ts`.
  - To run E2E:

    1. Start dev servers (`npm run dev`)
    2. In another terminal:
       npx playwright test

  - E2E simulates a real user: checks login flow, dashboard UI, etc.

**Test DB:**

- Use a separate test database if needed (set a test `DATABASE_URL` in env).
- API should allow being imported into test runners (not just started via listen).

---

## Continuous Integration (CI) & Deployment

- **CI (GitHub Actions):**

  - On every push and Pull Request:

    1. Install dependencies (uses cache)
    2. Lint and type-check
    3. Run Vitest unit tests
    4. Build web/API/docs
    5. _(Planned)_ Run Playwright E2E tests (may be restricted to certain branches or nightly)

  - All checks must pass before merge to `main`.

- **Deployment:** _(MVP Plan, update as infra changes)_

  - **Frontend (Next.js):** Deployed to Vercel (or Docker/container on your infra)
  - **Backend (API):** Heroku, Fly.io, or Docker container on cloud (set env vars: DB, Clerk, Plaid keys)
  - **Storybook Docs:** Publish as static site via GitHub Pages or Vercel (optional for public access)
  - **Database:** Managed PostgreSQL (render.com, Supabase, Neon, or self-hosted)

- **Automatic Deployments:**

  - Push to `main` can trigger deployment jobs (CI runs migrations via Prisma if needed).
  - Monitoring/analytics: Self-hosted PostHog for anonymous usage, consider Sentry for errors.

---

## Dev Workflow Summary

1. Create a feature branch (`feature/my-feature`).
2. Write code and tests.
   Run:
   npm run lint && npm run test
3. Open a PR to `main`.
4. CI checks run automatically.
5. Code review and merge.
6. `main` branch triggers deployment & updates Storybook docs.
7. **Update docs and tests as you go** to keep project stable and usable.

---

**Storybook** is the source of truth for both component previews and all documentation (this file, user guide, features, release notes, etc.).
Keep this file updated any time the build, test, or deployment process changes.
