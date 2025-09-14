"use client";

import { useEffect } from "react";
import useAppStore from "@/lib/stores/appstore";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { isDark } = useAppStore();

  useEffect(() => {
    // Apply theme to document on mount and when theme changes
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return <>{children}</>;
}
