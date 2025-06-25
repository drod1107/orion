// /components/ui/FinancialAssistant.tsx
import { useState } from "react";
import { Send } from "lucide-react";

interface FinancialAssistantProps {
  handleAsk: (query: string) => Promise<void>;
}

export function FinancialAssistant({ handleAsk }: FinancialAssistantProps) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    try {
      await handleAsk(query);
      setQuery("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-white mb-4">
        Financial Assistant
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="assistant-query" className="sr-only">
            Ask your financial assistant
          </label>
          <textarea
            id="assistant-query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask me about your finances..."
            className="w-full px-4 py-3 bg-slate-700 text-white placeholder-slate-400 rounded-lg border border-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
            rows={3}
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <Send className="w-4 h-4" />
          {isLoading ? "Thinking..." : "Ask"}
        </button>
      </form>
    </div>
  );
}
