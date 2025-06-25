// /apps/web/app/components/Dashboard.tsx

// import { BudgetCategoryItem } from "./ui/BudgetCategoryItem";
// import { SpendingChart } from "./ui/SpendingChart";
// import { FinancialAssistant } from "./ui/FinancialAssistant";
// import { ConnectBankButton } from "./ui/ConnectBankButton";
import { useEffect, useState } from "react";

export function Dashboard() {
  const [budgets, setBudgets] = useState<
    Array<{ id: string; name: string; budget: number }>
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/budgets")
      .then((res) => res.json())
      .then((data) => {
        setBudgets(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!budgets.length) return <div>No budget categories found.</div>;

  return (
    <div>
      <h2>Budget Categories</h2>
      <div>
        {budgets.map((cat) => (
          <div key={cat.id}>
            {cat.name} - ${cat.budget}
          </div>
        ))}
      </div>
    </div>
  );
}
