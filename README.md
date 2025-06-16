# Orion – A Mint-Style Budgeting App Reinvented

**Orion** is a modern, privacy-first budgeting tool designed to restore everything people loved about Mint—and fix everything they hated. It's built for clarity, zero-knowledge security, and local AI-powered financial planning.

> “I hate it. It seems to care more about offering me loans and credit cards than actually budgeting.”  
> — [r/personalfinance](https://www.reddit.com/r/personalfinance/comments/1k3o5s5/whats_a_good_app_that_replaces_the_old_mint_one/), on Mint’s Credit Karma replacement[^1]

> “Monarch ... is everything I wanted Mint to be.”  
> — [r/personalfinance](https://www.reddit.com/r/personalfinance/comments/1k3o5s5/whats_a_good_app_that_replaces_the_old_mint_one/)[^1]

---

## **Mission**

To create the _simplest_, _most trustworthy_, and _actually usable_ personal finance tool available; one that ex-Mint users will instantly love, and that data privacy nuts will rave over.

---

## 🧪 MVP Goals

The first working version will:

- Let users securely log in with passkeys & TOTP
- Pull in bank transactions via Plaid
- Encrypt all financial data client-side before storage
- Allow setting monthly budgets + category rollovers
- Auto-categorize transactions + allow user overrides
- Visualize budgets with red/yellow/green progress bars
- Support local AI planning: “Can I afford this trip?”
- Launch as freemium (with account/category limits)

---

## 🔒 Core Principles

- **Privacy-first**: All sensitive data encrypted _before_ it hits our DB
- **Trust by design**: No ads, upsells, or selling data—ever
- **No BS simplicity**: At-a-glance clarity, no fiddly workflows
- **Local AI**: Real planning help powered by on-device models

---

## 🧱 Tech Stack

| Layer        | Tool/Tech                        |
| ------------ | -------------------------------- |
| Frontend     | Next.js (App Router) + Tailwind  |
| Backend API  | tRPC (Node.js)                   |
| DB           | PostgreSQL (or MongoDB) + Prisma |
| Auth         | Clerk (Passkeys + TOTP)          |
| Bank Sync    | Plaid (fallback: Teller)         |
| AI Insights  | WebLLM with Llama 3 (or Ollama)  |
| Charts & Viz | Recharts + DuckDB                |
| Billing      | Stripe                           |
| Testing      | Playwright + Vitest              |
| Analytics    | PostHog (self-hosted)            |

---

## **Milestones (MVP Timeline)**

### ✅ Phase 1: Security Skeleton

- [x] MFA Login with Clerk
- [ ] Zero-knowledge encryption for transaction data
- [ ] Bank connection + daily sync pipeline

### ✅ Phase 2: Budgeting Core

- [ ] Budget categories with rollovers
- [ ] Transaction inbox + category rules
- [ ] Visual budget dashboard (R/Y/G bars)

### ✅ Phase 3: Killer AI Feature

- [ ] On-device AI insight assistant
- [ ] Spending summaries & “Can I afford X?” planner
- [ ] Basic charts (trend line, pivot table, monthly avg)

### ✅ Phase 4: Beta Launch

- [ ] Stripe paywall (freemium)
- [ ] Invite-only beta with feedback tools
- [ ] Metrics + monitoring

## 🛠 Local Setup (Coming Soon)

We'll update this once the Turborepo + API + DB config is live.

---

[^1]: <https://www.reddit.com/r/personalfinance/comments/1k3o5s5/whats_a_good_app_that_replaces_the_old_mint_one/>
