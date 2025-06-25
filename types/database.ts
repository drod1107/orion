// /types/database.ts
import type { Prisma } from "@prisma/client";

// Prisma types with relations
export type BudgetCategoryWithTransactions = Prisma.BudgetCategoryGetPayload<{
  include: { transactions: true };
}>;

export type TransactionWithRelations = Prisma.TransactionGetPayload<{
  include: {
    account: true;
    budgetCategory: true;
    transactionCategory: true;
  };
}>;

export type BankAccountWithTransactions = Prisma.BankAccountGetPayload<{
  include: { transactions: true };
}>;

export type UserWithRelations = Prisma.UserGetPayload<{
  include: {
    accounts: true;
    budgets: true;
    transactions: {
      include: {
        budgetCategory: true;
        transactionCategory: true;
      };
    };
  };
}>;

// Custom aggregation types
export type BudgetSummary = {
  totalBudget: number;
  totalSpent: number;
  remaining: number;
  categories: Array<{
    id: string;
    name: string;
    budget: number;
    spent: number;
  }>;
};

export type MonthlyInsight = {
  month: string;
  totalSpent: number;
  totalIncome: number;
  netChange: number;
  topCategories: Array<{
    categoryId: string;
    categoryName: string;
    amount: number;
    percentage: number;
  }>;
};
