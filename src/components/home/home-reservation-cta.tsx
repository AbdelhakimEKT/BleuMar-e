import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";

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
};

export function HomeReservationCta({ siteConfig }: HomeReservationCtaProps) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.copyColumn}>
          <div className="eyebrow">Réservation</div>
          <h2 className={styles.title}>Maintenant, il faut que la page donne envie de cliquer sans hésiter.</h2>
          <p className={styles.lead}>
            On garde la réservation simple, mais on la cadre comme un geste premium: bonne
            information, bonne respiration, bon moment pour convertir.
          </p>

          <div className={styles.actions}>
            <Link href="/reservation" className="button" data-cursor-label="Réserver">
              Réserver une table
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
