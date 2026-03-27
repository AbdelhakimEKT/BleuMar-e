import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

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
    title: "Maintenant, il faut que la page donne envie de cliquer sans hésiter.",
    lead:
      "On garde la réservation simple, mais on la cadre comme un geste premium: bonne information, bonne respiration, bon moment pour convertir.",
    reserve: "Réserver une table"
  },
  en: {
    eyebrow: "Booking",
    title: "Now the page needs to make the click feel immediate.",
    lead:
      "Booking stays simple, but it is framed like a premium gesture: the right information, the right breathing room, the right moment to convert.",
    reserve: "Book a table"
  }
} as const;

export function HomeReservationCta({ siteConfig, locale }: HomeReservationCtaProps) {
  const copy = reservationCtaCopy[locale];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.copyColumn}>
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
        </Reveal>

        <Reveal className={styles.card}>
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
        </Reveal>
      </div>
    </section>
  );
}
