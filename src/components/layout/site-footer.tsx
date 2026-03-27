import Link from "next/link";

import { footerLinks, navigation } from "@/content/site";
import { getSiteSettingsData } from "@/sanity/loaders";

import styles from "./site-footer.module.css";

export async function SiteFooter() {
  const siteConfig = await getSiteSettingsData();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandBlock}>
            <img
              src="/branding/bleu-maree-logo-dark.svg"
              alt="Logo Bleu Marée"
              className={styles.logo}
            />
            <p className="microcopy">
              {siteConfig.description}
            </p>
          </div>

          <div className={styles.linksBlock}>
            <div>
              <p className="kicker">Navigation</p>
              <div className={styles.linkList}>
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="kicker">Informations pratiques</p>
              <ul className="contact-list">
                <li>
                  <span className="contact-label">Adresse</span>
                  <span className="contact-copy">
                    {siteConfig.addressLineOne}
                    <br />
                    {siteConfig.addressLineTwo}
                  </span>
                </li>
                <li>
                  <span className="contact-label">Contact</span>
                  <span className="contact-copy">
                    <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a>
                    <br />
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="kicker">Horaires</p>
              <ul className="detail-list">
                {siteConfig.openingHours.map((item) => (
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
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <p className="microcopy">Bleu Marée · Biarritz · Expérience gastronomique premium</p>
        </div>
      </div>
    </footer>
  );
}
