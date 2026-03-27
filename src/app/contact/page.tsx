import Link from "next/link";

import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/metadata";
import { getSiteSettingsData } from "@/sanity/loaders";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Retrouvez les informations pratiques de Bleu Marée à Biarritz: accès, horaires, téléphone, email et formulaire de contact."
});

export default async function ContactPage() {
  const siteConfig = await getSiteSettingsData();

  return (
    <>
      <PageHero
        eyebrow="Contact & accès"
        title="Tout ce qu'il faut pour venir, appeler ou écrire sans détour."
        intro="La page contact rassemble les informations pratiques les plus utiles et prépare l'intégration d'un plan ou d'une carte externe."
        image="/images/hero/bleu-maree-hero-atlantic-dining-room.png"
      />

      <section className="section">
        <div className="container grid-two">
          <Reveal className="stack">
            <SectionIntro
              eyebrow="Informations pratiques"
              title="Une page pensée pour les parcours rapides."
              lead="Horaires, téléphone, email, accès et lien de navigation sont regroupés pour les visiteurs qui cherchent une réponse immédiate."
            />

            <div className="surface-card">
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
                  <span className="contact-label">Téléphone</span>
                  <span className="contact-copy">
                    <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a>
                  </span>
                </li>
                <li>
                  <span className="contact-label">Email</span>
                  <span className="contact-copy">
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </span>
                </li>
                <li>
                  <span className="contact-label">Accès</span>
                  <span className="contact-copy">
                    Accès direct via Google Maps, avec possibilité d'ajouter ensuite parking,
                    voiturier, PMR ou consignes plus détaillées.
                  </span>
                </li>
              </ul>
            </div>

            <div className="surface-card">
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

            <div className="cta-row">
              <Link href={siteConfig.mapUrl} className="button" target="_blank" rel="noreferrer">
                Ouvrir l'itinéraire
              </Link>
              <Link href="/reservation" className="button-secondary">
                Réserver
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
