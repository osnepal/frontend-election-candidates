"use client";
import React, { useEffect } from "react";
import useAppStore from "@/lib/stores/appstore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { isDark } = useAppStore();

  useEffect(() => {
    // Apply theme to document on mount and when theme changes
    if (isDark) {
      /* eslint-disable */
      document.documentElement.classList.add("dark");
    } else {
      /* eslint-disable */
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
