export interface MonthlyInsight {
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
}

export interface SpendingPattern {
  category: string;
  averageMonthly: number;
  trend: "increasing" | "decreasing" | "stable";
  seasonality?: {
    peak: string;
    low: string;
  };
}
