"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])


  return (
    <>
      <div>hello</div>
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </>
  );
}
