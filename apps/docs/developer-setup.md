# Developer Setup & Installation

_This guide explains how to get the Orion app running locally for development._

---

## Prerequisites

- **Node.js 18+** and npm (npm workspaces via Turborepo)
- **PostgreSQL** (local instance or Docker container)
- **Clerk API Keys** for authentication (publishable & secret key)
- **Plaid API Keys** (optional, for bank sync – use Plaid sandbox keys in dev)
- _(Optional)_ **Stripe API Keys** if testing premium subscription flow

---

## Local Installation Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-org/orion.git
   ```

2. **Install Dependencies:**

   ```bash
   cd orion
   npm install
   ```

   - Uses Turborepo to install all workspace dependencies (Next.js app, Express API, UI lib, etc)

3. **Configure Environment Variables:**

   - Copy sample files:

     - `cp .env.sample .env` (root env for DB URL)
     - `cp apps/web/.sample.env.local apps/web/.env.local` (frontend env)

   - Edit `.env` in root and set your DB connection:

     ```env
     DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<dbname>"
     ```

   - Edit `apps/web/.env.local` and fill in:

     ```env
     NEXT_PUBLIC_DEV_API_URL=http://localhost:4000
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your Clerk publishable key>
     CLERK_SECRET_KEY=<your Clerk secret key>
     ```

   - _(Optional)_ Add Plaid sandbox keys in `apps/web/.env.local` if testing Plaid integration

4. **Set Up the Database:**

   - Ensure Postgres is running. Then:

     ```bash
     npx prisma migrate dev --name init
     ```

   - This creates the dev DB and initial schema per `prisma/schema.prisma`
   - Rerun `npx prisma migrate dev` after future schema changes

5. **Run the App in Development Mode:**

   ```bash
   npm run dev
   ```

   - Starts both frontend (Next.js, [http://localhost:3000](http://localhost:3000)) and backend (API, [http://localhost:4000](http://localhost:4000))
   - Web app proxies API requests to `localhost:4000` by default

6. **Verify Setup:**

   - Visit [http://localhost:3000](http://localhost:3000). Sign up/sign in via Clerk UI. Test features (dashboard, bank connect, etc).
   - API server should log “Orion API is running on port 4000.”
   - Fix any errors by checking env files and database connection.

7. **Running Storybook (Docs Site):**

   ```bash
   cd apps/docs
   npm run dev
   ```

   - Open [http://localhost:6006](http://localhost:6006) for component library & docs

8. **Running Tests:**

   - See **Contributor Guide** for details, but the basics:

   ```bash
   npm run test       # Vitest unit/integration tests
   npx playwright test   # Playwright end-to-end tests (from apps/e2e)
   ```

---

Keep this guide up to date as new dependencies, features, or environment variables are added. Link to this doc from the README for local dev setup reference.
