// /types/transaction.ts
export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  categoryId?: string;
  accountId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TransactionCategory {
  id: string;
  name: string;
  color?: string;
  icon?: string;
}

export interface TransactionFilters {
  categoryId?: string;
  dateFrom?: string;
  dateTo?: string;
  amountMin?: number;
  amountMax?: number;
  searchTerm?: string;
}
