"use client";

import styles from "./page.module.css";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Dashboard } from "./components/Dashboard"; // <-- Adjust path as needed

export default function Home() {
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
          <Dashboard />
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
