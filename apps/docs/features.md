# Orion Features & UX Decisions

_A living document tracking all major features, their purpose, and the user pain points they address._

---

## Budget Dashboard

- **What:**  
  Mint-style budget dashboard with color-coded progress bars, clear category summaries, and instant at-a-glance clarity.
- **Why:**  
  Users hate extra clicks and cryptic charts. The goal is to know immediately if they're over budget, with no hunting.
- **Core UX:**
  - Each category shows: name, budgeted amount, spent amount, remaining (or overage), and a green/yellow/red progress bar.
  - Rollovers (unused budget carries forward) and history are always visible, not hidden in menus.
  - Total budget and total spent are summarized at the top.

---

## Bank Connection

- **What:**  
  Secure Plaid-based sync for bank accounts and credit cards.
- **Why:**  
  “If I have to manually import CSVs, I won’t use it.” Real-time, automated sync is non-negotiable.
- **Core UX:**
  - User taps “Connect Bank,” completes Plaid flow, and transactions are pulled and categorized automatically.
  - Supports daily sync and multiple accounts.
  - No sensitive credentials are ever stored by Orion.

---

## Transaction Inbox & Categorization

- **What:**  
  Automated (with override) transaction categorization with fast editing and “set it and forget it” persistent rules.
- **Why:**  
  Manual categorization leads to user churn. Users want automation but must be able to correct errors—once.
- **Core UX:**
  - New transactions land in an “Inbox” for review. Auto-categorization is applied, but the user can quickly reassign.
  - Users can choose “Apply to all similar transactions” to set a persistent rule.
  - Autocomplete on category fields, batch actions (“recategorize all past transactions from Vendor X”).
  - App learns from user corrections and improves over time.

---

## AI Assistant

- **What:**  
  Local AI that answers natural-language questions like “Can I afford this?” and gives plain-English summaries.
- **Why:**  
  Users are overwhelmed by raw data and charts; they want direct, actionable guidance.
- **Core UX:**
  - User types a question (e.g. “Can I spend $500 on travel this month?”), and AI answers based on their budget and spending history.
  - Assistant highlights trends (“Dining spend is 20% above average this month”) in simple terms.
  - Runs entirely in-browser for privacy—no data leaves the device.

---

## Secure Authentication (Passkeys & MFA)

- **What:**  
  Passwordless sign-in using device Passkeys (biometric login) with optional TOTP-based 2-factor authentication.
- **Why:**  
  Financial apps must have strong protection. “Mint doesn’t even have 2FA—when Facebook is more secure, there’s a problem.”
- **Core UX:**
  - One-tap login with Face ID/Touch ID or device PIN (via WebAuthn passkeys); no passwords required.
  - Option to add TOTP 2FA (QR code for Google Authenticator, etc.) for key actions or new devices.
  - Clerk handles Passkey and TOTP flows for a consistent, familiar experience.

---

## Zero-Knowledge Data Encryption

- **What:**  
  All personal financial data is encrypted on the client before reaching Orion’s servers. Only the user holds the keys.
- **Why:**  
  Privacy is paramount; users do not trust “free” tools that mine or sell data. Many would rather pay for privacy.
- **Core UX:**
  - Encryption keys are generated and stored client-side; users don’t have to manage keys manually.
  - All sensitive data (transactions, balances, budgets) is encrypted before leaving the device.
  - Even Orion staff or a server breach cannot access plaintext data.
  - Trade-off: some features (e.g. search, troubleshooting) happen client-side; user support can’t see user data.

---

**NOTE:**  
This list only covers features included in the MVP as of v0.1.0.  
As new features are implemented or removed, update this document to reflect the true current state—no more, no less.
