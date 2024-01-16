// app/providers.jsx

"use client";

import GlobalStyle from "@/styles/GlobalStyle";
import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">{children}</ThemeProvider>
    </>
  );
}