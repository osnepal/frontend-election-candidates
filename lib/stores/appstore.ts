import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { Language, getAvailableLanguages } from "@/lib/translations";

interface AppStoreProps {
  isDark: boolean;
  setIsDark: (b: boolean) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const useAppStore = create<AppStoreProps>()(
  devtools(
    persist(
      (set) => ({
        isDark: false,
        setIsDark: (b: boolean) =>
          set(() => ({
            isDark: b,
          })),
        language: "en" as Language,
        setLanguage: (lang: Language) => {
          const availableLanguages = getAvailableLanguages();
          if (availableLanguages.includes(lang)) {
            set(() => ({
              language: lang,
            }));
          } else {
            // Language not available, fall back to English
            set(() => ({
              language: "en",
            }));
          }
        },
      }),
      {
        name: "app-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useAppStore;
