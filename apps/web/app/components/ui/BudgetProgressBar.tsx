// /components/ui/BudgetProgressBar.tsx
import clsx from "clsx";

interface BudgetProgressBarProps {
  spent: number;
  budget: number;
}

export function BudgetProgressBar({ spent, budget }: BudgetProgressBarProps) {
  const percentage = Math.min((spent / budget) * 100, 100);
  const isOverBudget = spent > budget;

  const getColorClass = () => {
    if (isOverBudget || percentage >= 100) return "bg-red-500";
    if (percentage >= 75) return "bg-amber-500";
    return "bg-green-500";
  };

  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Budget spent: ${percentage.toFixed(0)}%`}
      className="w-full"
    >
      <div className="relative h-2 w-full bg-slate-700 rounded-full overflow-hidden">
        <div
          className={clsx(
            "h-full transition-all duration-300 ease-out",
            getColorClass(),
          )}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
}
