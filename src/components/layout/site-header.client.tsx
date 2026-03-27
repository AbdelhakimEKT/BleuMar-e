"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getNavigation } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { getAlternateLocale, getLocaleFromPathname, stripLocaleFromPathname, withLocale } from "@/i18n/routing";
import { getUiCopy } from "@/i18n/ui";
import type { SiteSettingsData } from "@/sanity/loaders";

import styles from "./site-header.module.css";

type SiteHeaderClientProps = {
  settingsByLocale: Record<Locale, SiteSettingsData>;
};

export function SiteHeaderClient({ settingsByLocale }: SiteHeaderClientProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const alternateLocale = getAlternateLocale(locale);
  const strippedPathname = stripLocaleFromPathname(pathname);
  const settings = settingsByLocale[locale];
  const ui = getUiCopy(locale);
  const navigation = getNavigation(locale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link
          href={withLocale(locale, "/")}
          className={styles.brand}
          aria-label={`${settings.name} ${settings.location}`}
        >
          <span className={styles.brandMark}>BM</span>
          <span className={styles.brandCopy}>
            <strong>{settings.name}</strong>
            <span>{settings.location}</span>
          </span>
        </Link>

        <div className={styles.utilityRail}>
          <div className={styles.localeSwitch} aria-label={ui.languageLabel}>
            {(["fr", "en"] as const).map((language) => {
              const isActive = language === locale;
              const targetPath =
                language === locale ? withLocale(locale, strippedPathname) : withLocale(language, strippedPathname);

              return (
                <Link
                  key={language}
                  href={targetPath}
                  className={`${styles.localeLink} ${isActive ? styles.localeLinkActive : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {ui.languages[language]}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            {ui.menuButton}
          </button>
        </div>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
          aria-label={ui.navigationLabel}
        >
          {navigation.map((item) => {
            const isActive = item.href === "/" ? strippedPathname === "/" : strippedPathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href={withLocale(locale, "/reservation")} className="button">
            {ui.reserve}
          </Link>

          <Link
            href={withLocale(alternateLocale, strippedPathname)}
            className={styles.mobileLocaleLink}
          >
            {ui.languages[alternateLocale]}
          </Link>
        </nav>
      </div>
    </header>
  );
}
