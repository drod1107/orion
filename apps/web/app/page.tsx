"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

// type Props = Omit<ImageProps, "src"> & {
//   srcLight: string;
//   srcDark: string;
// };

const apiUrl = process.env.NEXT_PUBLIC_DEV_API_URL;
if (!apiUrl) throw new Error("API URL is not set in env vars");

export default function Home() {
  const [apiMsg, setApiMsg] = useState("");

  // Fetch API message and store in state
  const fetchApiMessage = async () => {
    try {
      const response = await fetch(`${apiUrl}/`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setApiMsg(data.message);
    } catch (error) {
      console.error("Error fetching API message:", error);
      setApiMsg("Failed to fetch API message.");
    }
  };

  // Button component that triggers fetchApiMessage
  const FetchButton = ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => (
    <button className={className} onClick={fetchApiMessage}>
      {children}
    </button>
  );

  // Component to display API response
  const ApiResponse = () => (
    <div>
      <h2>API Response:</h2>
      <p>{apiMsg}</p>
    </div>
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Orion theme logo - simple compass/star style */}
        <svg
          width="96"
          height="96"
          viewBox="0 0 48 48"
          fill="none"
          style={{ display: "block", margin: "0 auto" }}
        >
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="#6366f1"
            strokeWidth="2"
            fill="#1e293b"
          />
          <polygon
            points="24,8 29,29 24,40 19,29"
            fill="#fbbf24"
            stroke="#fbbf24"
            strokeWidth="1.5"
          />
          <circle cx="24" cy="24" r="3" fill="#6366f1" />
        </svg>

        <SignedIn>
          <FetchButton className={styles.button}>Fetch API Message</FetchButton>
          <ApiResponse />
        </SignedIn>
        <SignedOut>
          <div style={{ display: "flex", gap: 8 }}>
            <SignInButton>
              <button className={styles.button}>Sign In</button>
            </SignInButton>
            <SignUpButton>
              <button className={styles.button}>Sign Up</button>
            </SignUpButton>
          </div>
        </SignedOut>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
