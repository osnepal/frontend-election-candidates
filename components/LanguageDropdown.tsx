"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check } from "lucide-react";
import useAppStore from "@/lib/stores/appstore";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import {
  getAvailableLanguages,
  languageMetadata,
  Language,
} from "@/lib/translations";

export default function LanguageDropdown() {
  const { language, setLanguage } = useAppStore();
  const { t } = useLanguage();

  const availableLanguages = getAvailableLanguages();
  const currentLanguage = languageMetadata[language];

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 min-w-[120px] justify-between"
          aria-label={t("selectLanguage")}
          title={t("selectLanguage")}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">{currentLanguage.flag}</span>
            <span>{currentLanguage.nativeName}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 max-h-60 overflow-y-auto">
        {availableLanguages.map((lang) => {
          const langData = languageMetadata[lang];
          const isSelected = lang === language;

          return (
            <DropdownMenuItem
              key={lang}
              onClick={() => handleLanguageSelect(lang)}
              className="flex items-center gap-3 px-2 py-1 cursor-pointer"
            >
              <span className="text-lg">{langData.flag}</span>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{langData.nativeName}</div>
              </div>
              {isSelected && <Check className="h-4 w-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
