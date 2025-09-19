import { useLanguage } from "@/lib/contexts/LanguageContext";
import { TranslationKey } from "@/lib/translations";
import { cn } from "@/lib/utils";
import React from "react";

export default function Text({
  title,
  className,
  label = false,
  span = false,
}: {
  title: TranslationKey;
  className?: string;
  label?: boolean;
  span?: boolean;
}) {
  const { t } = useLanguage();

  if (span) {
    return <span className={cn(className)}>{t(title)}</span>;
  }

  return label ? (
    <label htmlFor={title} className={cn(className)}>
      {t(title)}
    </label>
  ) : (
    <p className={cn(className)}>{t(title)}</p>
  );
}
