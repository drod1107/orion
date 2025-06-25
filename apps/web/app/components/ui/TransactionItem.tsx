// /components/ui/TransactionItem.tsx
import { Transaction } from "@/types/transaction";
import clsx from "clsx";
import { useState } from "react";

interface TransactionItemProps {
  transaction: Transaction;
  categories: Array<{ id: string; name: string }>;
}

export function TransactionItem({
  transaction,
  categories,
}: TransactionItemProps) {
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const isExpense = transaction.amount < 0;
  const category = categories.find((c) => c.id === transaction.categoryId);

  return (
    <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-4 mb-1">
          <span className="text-sm text-slate-400">{transaction.date}</span>
          <button
            onClick={() => setIsEditingCategory(!isEditingCategory)}
            className="px-2 py-1 text-xs font-medium bg-slate-700 text-slate-300 rounded-md hover:bg-slate-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            aria-label={`Change category from ${category?.name || "Uncategorized"}`}
          >
            {category?.name || "Uncategorized"}
          </button>
        </div>
        <p className="text-white truncate">{transaction.description}</p>
      </div>
      <span
        className={clsx(
          "text-lg font-semibold ml-4",
          isExpense ? "text-red-400" : "text-green-400",
        )}
      >
        {isExpense ? "-" : "+"}${Math.abs(transaction.amount).toFixed(2)}
      </span>
    </div>
  );
}
