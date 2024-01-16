"use client";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{mounted && children}</Providers>
      </body>
    </html>
  );
}