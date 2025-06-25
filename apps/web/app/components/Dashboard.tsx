// /apps/web/app/components/Dashboard.tsx

import { BudgetCategoryItem } from "./ui/BudgetCategoryItem";
import { SpendingChart } from "./ui/SpendingChart";
import { FinancialAssistant } from "./ui/FinancialAssistant";
import { ConnectBankButton } from "./ui/ConnectBankButton";

const demoBudgets = [
  { id: "cat-groceries", name: "Groceries", budget: 500, spent: 320 },
  { id: "cat-rent", name: "Rent", budget: 1200, spent: 1200 },
  { id: "cat-fun", name: "Fun Money", budget: 150, spent: 95 },
];

const demoTrend = [
  { date: "2025-06-01", amount: 120 },
  { date: "2025-06-02", amount: 80 },
  { date: "2025-06-03", amount: 150 },
];

export function Dashboard() {
  // Stub handlers for now
  const handlePlaidOpen = () => alert("Plaid Link would open");
  interface AssistantAskHandler {
    (query: string): Promise<void>;
  }

  const handleAssistantAsk: AssistantAskHandler = async (query: string) =>
    alert(`Assistant asked: ${query}`);

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="bg-gradient-to-r from-indigo-500/10 to-amber-500/10 border border-indigo-500/20 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-1">
          Connect your bank accounts
        </h2>
        <ConnectBankButton openPlaid={handlePlaidOpen} />
      </div>

      {/* Budgets */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">
          Budget Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoBudgets.map((cat) => (
            <BudgetCategoryItem key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* Trend */}
      <section>
        <h2 className="text-xl font-semibold text-white mb-4">
          Spending Trend
        </h2>
        <SpendingChart data={demoTrend} />
      </section>

      {/* Assistant */}
      <section>
        <FinancialAssistant handleAsk={handleAssistantAsk} />
      </section>
    </div>
  );
}
