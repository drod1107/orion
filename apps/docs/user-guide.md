# Orion User Guide

Welcome to **Orion**, the reinvention of Mint with privacy at its core. This guide walks you through using Orion to manage your personal finances, from initial setup to advanced features.

---

## Getting Started: Sign Up and Log In

- **Sign Up:**

  - On the home page, click **Sign Up**. You’ll create an account using passkey-based (biometric) login if your device supports it (Face ID, Touch ID, Windows Hello, etc).
  - During signup, you can enable two-factor authentication (TOTP – scan QR with Authenticator app).

- **Log In:**

  - Click **Sign In**. Use your passkey (biometric) or email + TOTP code if enabled. After logging in, you land on the **Budget Dashboard**.

---

## Connecting Your Bank Accounts

- Go to **Add Account** (dashboard or accounts menu), then **Connect Bank**. This launches Plaid’s secure flow.
- Choose your provider and complete authentication inside the Plaid window. Orion never sees your credentials.
- After linking, Orion pulls in recent transactions and updates daily. Add more accounts as needed (subject to free tier limits).
- _(Beta: If your bank isn’t supported, CSV import is coming soon.)_

---

## Setting Up Your Budget Categories

- Go to **Budgets** (dashboard/sidebar). Default categories are provided; you can edit or delete these.
- **Add Budget Category:** Name it and set a monthly budget amount.
- **Rollover:** Optionally enable rollovers (unused budget carries into next month).
- Categories show on your dashboard with color progress bars.
- Edit budgets any time; changes apply retroactively for the month.

---

## Managing Transactions (Inbox & Categorization)

- New transactions appear in the **Inbox** with suggested categories.
- Review and confirm or edit the suggested category. Use autocomplete and batch actions to recategorize similar transactions.
- When you change a category, Orion asks if you want to apply this rule to future similar transactions ("set and forget").
- Search, filter, or select multiple transactions to batch edit. Over time, the inbox should require less attention as Orion learns your patterns.

---

## Using the Budget Dashboard

- The **Dashboard** shows all budget categories with green/yellow/red bars.

  - **Green:** On track.
  - **Yellow:** Nearing limit.
  - **Red:** Over budget.

- Each category shows the budget, spent, and remaining (or over).
- Rollover amounts are indicated with info icons.
- At the top, view total budget vs. total spent, and any urgent alerts (over-budget, uncategorized transactions).

---

## AI Planning Assistant

- Access via the **AI Assistant** section or chat icon.
- Type a question in plain English. Examples:

  - "Can I afford a \$2,000 vacation in December?"
  - "How much do I spend on groceries monthly?"
  - "What's my biggest spending category this month?"

- AI runs locally, never sends your financial data to a server. Answers may include summaries, trends, or quick charts.
- _(Beta: The assistant may occasionally give imperfect answers; always double-check for big decisions.)_

---

## Free vs. Premium Accounts

- **Free Tier:** Link up to X accounts, create up to Y budget categories. No ads, no data selling—ever.
- **Premium Tier:** Unlimited accounts/categories and access to advanced features as released. Subscribe via **Settings > Upgrade** (handled by Stripe; upgrade is instant).
- All users can export data to CSV.
- _(During beta, all features are free or have relaxed limits.)_

---

## Privacy & Security Notes

- All sensitive data is encrypted locally before being stored in Orion’s cloud (zero-knowledge: only you hold the keys).
- Sign in with passkey (biometric) and enable 2FA for maximum protection.
- Orion does **not** show ads, sell your data, or share it with third parties. Analytics (PostHog) are self-hosted and anonymized.
- Release notes are published for every update. For issues or support, contact us any time.

---

_This guide will expand as Orion’s features grow. Check the docs or Release Notes for the latest instructions and tips._
