"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { translations, type Locale, type Translations } from "@/i18n/translations";

interface LanguageContextValue {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("mo7y-locale") as Locale | null;
    if (saved === "ar" || saved === "en") setLocale(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    localStorage.setItem("mo7y-locale", locale);
  }, [locale, mounted]);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const value: LanguageContextValue = {
    locale,
    t: translations[locale],
    toggleLocale,
    isRtl: locale === "ar",
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
