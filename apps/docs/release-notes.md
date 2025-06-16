# Release Notes

## v0.1.0 – Upcoming (MVP Beta)

- **Initial Beta Release:** This version represents the MVP feature set for Orion.

- **Authentication:** Clerk-based login with passkeys (WebAuthn) and optional TOTP 2FA for enhanced account security.

- **Bank Sync:** Plaid integration to connect bank accounts and automatically import transactions daily.

- **Budgeting:** Users can create budget categories with monthly limits (including category rollovers to the next month).

- **Transaction Categorization:** Transactions are auto-categorized on import. Users can review incoming transactions in a dedicated inbox, adjust categories, and define rules for future transactions.

- **Budget Dashboard:** Dashboard view with color-coded progress bars (green/yellow/red) to show spending against each budget category at a glance.

- **AI Assistant:** Local AI feature that answers questions like “Can I afford X?” using the user’s data (runs in-browser for privacy).

- **Freemium Model:** Launching with a free tier (limited number of linked accounts and budget categories) and a premium tier (unlimited accounts/categories and future premium features) for sustainable monetization.

- **Miscellaneous:**

  - Set up analytics with PostHog (self-hosted) for user interaction insights.
  - Integrated Stripe for handling premium subscription payments (to activate with premium launch).

_Further details and any bug fixes will be documented here as development continues. Future releases will be appended in descending order._
