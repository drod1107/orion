"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const apiUrl = process.env.NEXT_PUBLIC_DEV_API_URL;
if (!apiUrl) throw new Error("API URL is not set in env vars");

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

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
    children
  }: {
    className?: string;
    children: React.ReactNode;
  }) => (
    <button
      className={className}
      onClick={fetchApiMessage}
    >
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
        <ThemeImage
          className={styles.logo}
          srcLight="turborepo-dark.svg"
          srcDark="turborepo-light.svg"
          alt="Turborepo logo"
          width={180}
          height={38}
          priority
        />
        <SignedIn>
          <div style={{ marginBottom: 16 }}>
            <UserButton />
          </div>
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
