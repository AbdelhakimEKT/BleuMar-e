import { defaultLocale, type Locale } from "./config";

export function withLocale(locale: Locale, href: string) {
  if (!href.startsWith("/")) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/");
  const [, maybeLocale, ...rest] = segments;

  if (maybeLocale === "fr" || maybeLocale === "en") {
    return rest.length > 0 ? `/${rest.join("/")}` : "/";
  }

  return pathname;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const [, maybeLocale] = pathname.split("/");

  if (maybeLocale === "en") {
    return "en";
  }

  return defaultLocale;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}
