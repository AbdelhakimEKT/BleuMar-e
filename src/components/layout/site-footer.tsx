"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getFooterLinks, getNavigation } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { getLocaleFromPathname, withLocale } from "@/i18n/routing";
import { getUiCopy } from "@/i18n/ui";
import type { SiteSettingsData } from "@/sanity/loaders";

import styles from "./site-footer.module.css";

type SiteFooterProps = {
  settingsByLocale: Record<Locale, SiteSettingsData>;
};

export function SiteFooter({ settingsByLocale }: SiteFooterProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const settings = settingsByLocale[locale];
  const navigation = getNavigation(locale);
  const footerLinks = getFooterLinks(locale);
  const ui = getUiCopy(locale);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <img
              src="/branding/bleu-maree-logo-dark.svg"
              alt={`Logo ${settings.name}`}
              className={styles.logo}
            />
            <p className="microcopy">{settings.description}</p>
          </div>

          <div className={styles.linksBlock}>
            <div>
              <p className="kicker">{ui.navigationHeading}</p>
              <div className={styles.linkList}>
                {navigation.map((item) => (
                  <Link key={item.href} href={withLocale(locale, item.href)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="kicker">{ui.informationHeading}</p>
              <ul className="contact-list">
                <li>
                  <span className="contact-label">{ui.addressLabel}</span>
                  <span className="contact-copy">
                    {settings.addressLineOne}
                    <br />
                    {settings.addressLineTwo}
                  </span>
                </li>
                <li>
                  <span className="contact-label">{ui.contactLabel}</span>
                  <span className="contact-copy">
                    <a href={`tel:${settings.phoneRaw}`}>{settings.phoneDisplay}</a>
                    <br />
                    <a href={`mailto:${settings.email}`}>{settings.email}</a>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="kicker">{ui.openingHoursHeading}</p>
              <ul className="detail-list">
                {settings.openingHours.map((item) => (
                  <li key={item.day}>
                    <span className="detail-title">{item.day}</span>
                    <span className="detail-copy">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.linkList}>
            {footerLinks.map((item) => (
              <Link key={item.href} href={withLocale(locale, item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
          <p className="microcopy">{ui.footerTagline}</p>
        </div>
      </div>
    </footer>
  );
}
