import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./style.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJs by Panuwat",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.header}>
          <h1 className="text-center">CIS</h1>
          <div className={styles.navContainer}>
          <Link legacyBehavior href='../'><a className={styles.navLink}>Home</a></Link>
          {/* {" - "}<Link legacyBehavior href='/student'><a className={styles.navLink}>Student</a></Link> */}
          {" - "}<Link legacyBehavior href='/pokemon'><a className={styles.navLink}>Pokemon</a></Link>
          {" - "}<Link legacyBehavior href='/aboutme'><a className={styles.navLink}>About Me</a></Link>
          </div>
        </div>
        {children}</body>
    </html>
  );
}
