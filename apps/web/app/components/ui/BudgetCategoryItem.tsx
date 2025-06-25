// /components/ui/BudgetCategoryItem.tsx
import { BudgetCategory } from "../../types/budget";
import { BudgetProgressBar } from "./BudgetProgressBar";
import clsx from "clsx";

interface BudgetCategoryItemProps {
  category: BudgetCategory;
}

export function BudgetCategoryItem({ category }: BudgetCategoryItemProps) {
  const remaining = category.budget - category.spent;
  const isOverBudget = remaining < 0;

  return (
    <div className="bg-slate-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-white">{category.name}</h3>
        <span
          className={clsx(
            "text-sm font-medium",
            isOverBudget ? "text-red-400" : "text-slate-400",
          )}
        >
          {isOverBudget ? "Over by" : "Left"} ${Math.abs(remaining).toFixed(2)}
        </span>
      </div>
      <div className="space-y-2">
        <BudgetProgressBar spent={category.spent} budget={category.budget} />
        <div className="flex justify-between text-sm">
          <span className="text-slate-400">
            ${category.spent.toFixed(2)} of ${category.budget.toFixed(2)}
          </span>
          <span className="text-slate-500">
            {Math.round((category.spent / category.budget) * 100)}%
          </span>
        </div>
      </div>
    </div>
  );
}
