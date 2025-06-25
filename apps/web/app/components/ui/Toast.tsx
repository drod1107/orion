// /components/ui/Toast.tsx
import * as ToastPrimitive from "@radix-ui/react-toast";
import { createContext, useContext, useState } from "react";
import clsx from "clsx";
import { X } from "lucide-react";

interface ToastContextValue {
  showToast: (message: string, type?: "success" | "error" | "info") => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "info",
  ) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}
        {toasts.map((toast) => (
          <ToastPrimitive.Root
            key={toast.id}
            className={clsx(
              "fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-lg p-4 shadow-lg",
              "data-[state=open]:animate-in data-[state=closed]:animate-out",
              "data-[swipe=end]:animate-out data-[state=closed]:fade-out-80",
              "data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full",
              "data-[state=open]:sm:slide-in-from-bottom-full",
              {
                "bg-green-900 text-green-100": toast.type === "success",
                "bg-red-900 text-red-100": toast.type === "error",
                "bg-slate-800 text-slate-100": toast.type === "info",
              },
            )}
          >
            <ToastPrimitive.Description>
              {toast.message}
            </ToastPrimitive.Description>
            <ToastPrimitive.Action altText="Close" asChild>
              <button
                className="ml-2 rounded-md p-1 hover:bg-white/10 transition-colors"
                onClick={() =>
                  setToasts((prev) => prev.filter((t) => t.id !== toast.id))
                }
              >
                <X className="h-4 w-4" />
              </button>
            </ToastPrimitive.Action>
          </ToastPrimitive.Root>
        ))}
        <ToastPrimitive.Viewport className="fixed bottom-0 right-0 z-50 m-0 flex max-w-[420px] list-none flex-col gap-2 p-4 outline-none" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}
