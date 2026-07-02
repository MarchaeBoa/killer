"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dict, type Locale } from "./content";
import { PRODUCTS } from "./products";
import type { Product } from "@/components/ui/ProductCard";

const DEFAULT_LOCALE: Locale = "es";
const STORAGE_KEY = "dropspy.locale";

type I18nCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
};

const I18nContext = createContext<I18nCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // Restore the saved preference on mount (SSG output stays Spanish for SEO).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "pt") setLocaleState(saved);
    } catch {
      /* localStorage unavailable — keep default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nCtx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <LanguageProvider>");
  return ctx;
}

/** Shortcut for components that only need the active dictionary. */
export function useT(): Dict {
  return useI18n().t;
}

/** Product mock data with title/country localised to the active language. */
export function useProducts(): Product[] {
  const { t } = useI18n();
  return PRODUCTS.map((p, i) => ({
    ...p,
    title: t.products[i]?.title ?? p.title,
    country: t.products[i]?.country ?? p.country,
  }));
}
