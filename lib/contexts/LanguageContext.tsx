"use client";

import { createContext, useContext, useEffect } from "react";
import useAppStore from "@/lib/stores/appstore";
import { getTranslation, TranslationKey, Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { language } = useAppStore();

  const t = (key: TranslationKey) => getTranslation(key, language);

  useEffect(() => {
    // Update the HTML lang attribute based on the current language
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
