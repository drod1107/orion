// /components/ui/ConnectBankButton.tsx
interface ConnectBankButtonProps {
  openPlaid: () => void;
}

export function ConnectBankButton({ openPlaid }: ConnectBankButtonProps) {
  return (
    <button
      onClick={openPlaid}
      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors shadow-md hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      aria-label="Connect your bank account"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path
          d="M10 1L1 6V9H19V6L10 1Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M3 9V16H7V12H13V16H17V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M1 16H19" stroke="currentColor" strokeWidth="2" />
      </svg>
      Connect Bank Account
    </button>
  );
}
