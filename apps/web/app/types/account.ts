// /types/account.ts
export interface BankAccount {
  id: string;
  name: string;
  type: "checking" | "savings" | "credit";
  balance: number;
  lastSynced?: Date;
  isActive: boolean;
  institutionName?: string;
}

export interface PlaidAccount {
  accountId: string;
  name: string;
  officialName?: string;
  type: string;
  subtype?: string;
  balance: {
    available: number | null;
    current: number;
    limit: number | null;
  };
}
