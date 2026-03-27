import { notFound } from "next/navigation";

import { isLocale, locales, type Locale } from "./config";

type LocaleParams = Promise<{ locale: string }> | { locale: string };

export async function resolveLocale(params: LocaleParams): Promise<Locale> {
  const { locale } = await Promise.resolve(params);

  if (!isLocale(locale)) {
    notFound();
  }

  return locale;
}

export function generateLocaleParams() {
  return locales.map((locale) => ({ locale }));
}
