# Orion Features & UX Decisions

A living document tracking all major features, their purpose, and user pain points they address.

---

## Budget Dashboard

- **What:**  
  Mint-style budget dashboard with color-coded progress bars, category summaries, and at-a-glance clarity.

- **Why:**  
  Users hate extra clicks and cryptic charts (see Reddit feedback). “I want to know if I’m over budget instantly.”

- **Core UX:**
  - Each category: name, budget, spent, amount left/over, progress bar (green/yellow/red).
  - Rollovers and history are prominent, not hidden.

---

## Bank Connection

- **What:**  
  Secure Plaid-based sync for bank accounts and credit cards.

- **Why:**  
  “If I have to manually import CSVs, I won’t use it.” Real-time, automated sync is non-negotiable.

- **Core UX:**
  - User taps “Connect Bank,” completes Plaid flow, data is pulled & categorized.

---

## Transaction Inbox & Categorization

- **What:**  
  Automatic (with override) category rules, fast editing, “set it and forget it” philosophy.

- **Why:**  
  Manual categorization = churn. Users want it done for them, but want to correct errors _once_.

- **Core UX:**
  - Autocomplete categories, persistent custom rules, batch actions for “recategorize all.”

---

## AI Assistant

- **What:**  
  Local AI that answers “Can I afford this?” and gives plain-English trend summaries.

- **Why:**  
  Users are overwhelmed by “analytics”—they want guidance, not raw data.

- **Core UX:**
  - User types a natural question (“Can I spend $500 on travel this month?”), gets a real answer.

---
