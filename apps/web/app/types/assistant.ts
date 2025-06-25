import { BankAccount } from "./account";
import { BudgetSummary } from "./budget";
import { Transaction } from "./transaction";

// /types/assistant.ts
export interface AssistantQuery {
  id: string;
  query: string;
  response: string;
  timestamp: Date;
  userId: string;
}

export interface AssistantContext {
  recentTransactions: Transaction[];
  budgetSummary: BudgetSummary;
  accountBalances: BankAccount[];
}
