// /types/budget.ts
export interface BudgetCategory {
  id: string;
  name: string;
  budget: number;
  spent: number;
}

export interface BudgetSummary {
  totalBudget: number;
  totalSpent: number;
  remaining: number;
  categories: BudgetCategory[];
}
