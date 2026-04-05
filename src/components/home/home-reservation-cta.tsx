import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

import { HomeReveal } from "./home-reveal";
import styles from "./home-reservation-cta.module.css";

type SiteConfig = {
  phoneDisplay: string;
  phoneRaw: string;
  addressLineOne: string;
  addressLineTwo: string;
  openingHours: { day: string; hours: string }[];
};

type HomeReservationCtaProps = {
  siteConfig: SiteConfig;
  locale: Locale;
};

const reservationCtaCopy = {
  fr: {
    eyebrow: "Réservation",
    title: "Réserver devrait déjà donner le ton.",
    lead:
      "Choisissez l'heure. Indiquez l'occasion. La maison prend le relais.",
    reserve: "Réserver une table"
  },
  en: {
    eyebrow: "Booking",
    title: "Booking should already set the tone.",
    lead:
      "Choose the time. Mention the occasion. The house takes over.",
    reserve: "Book a table"
  }
} as const;

export function HomeReservationCta({ siteConfig, locale }: HomeReservationCtaProps) {
  const copy = reservationCtaCopy[locale];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <HomeReveal className={styles.copyColumn}>
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.lead}>{copy.lead}</p>

          <div className={styles.actions}>
            <Link
              href={withLocale(locale, "/reservation")}
              className="button"
              data-cursor-label={copy.reserve}
            >
              {copy.reserve}
            </Link>
            <Link href={`tel:${siteConfig.phoneRaw}`} className="button-secondary" data-cursor-label="Appeler">
              {siteConfig.phoneDisplay}
            </Link>
          </div>
        </HomeReveal>

        <HomeReveal className={styles.card} variant="panel" delay={0.08}>
          <div className={styles.cardHeader}>
            <p>{siteConfig.addressLineOne}</p>
            <strong>{siteConfig.addressLineTwo}</strong>
          </div>

          <ul className={styles.hoursList}>
            {siteConfig.openingHours.map((item) => (
              <li key={item.day}>
                <span>{item.day}</span>
                <strong>{item.hours}</strong>
              </li>
            ))}
          </ul>
        </HomeReveal>
      </div>
    </section>
  );
}
