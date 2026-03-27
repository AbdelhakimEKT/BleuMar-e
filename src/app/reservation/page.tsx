import Link from "next/link";

import { ZenchefReservationPanel } from "@/components/blocks/zenchef-reservation-panel";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import {
  reservationJourney,
  reservationPractices,
  zenchefSetupSteps
} from "@/content/reservation";
import { createMetadata } from "@/lib/metadata";
import { getSiteSettingsData } from "@/sanity/loaders";

export const metadata = createMetadata({
  title: "Réservation",
  description:
    "Réservez une table chez Bleu Marée à Biarritz grâce à une expérience claire, fluide et pensée pour le mobile."
});

export default async function ReservationPage() {
  const siteConfig = await getSiteSettingsData();

  return (
    <>
      <PageHero
        eyebrow="Réservation"
        title="Un parcours simple, clair et rassurant."
        intro="La V1 est désormais pensée autour de Zenchef: fiabilité, rapidité de mise en place, affichage mobile clair et gestion centralisée des disponibilités."
        image="/images/hero/bleu-maree-hero-dining-room-sunset.png"
      />

      <section className="section">
        <div className="container grid-two">
          <Reveal>
            <ZenchefReservationPanel settings={siteConfig} />
          </Reveal>

          <Reveal className="stack">
            <SectionIntro
              eyebrow="Informations utiles"
              title="Ce que le client doit comprendre sans effort."
              lead="Horaires, demandes spéciales, groupes, occasions et promesse de confirmation: tout est réuni pour rassurer dès la première lecture, tout en laissant Zenchef piloter le moteur de réservation."
            />

            <div className="surface-card">
              <ul className="detail-list">
                {siteConfig.openingHours.map((item) => (
                  <li key={item.day}>
                    <span className="detail-title">{item.day}</span>
                    <span className="detail-copy">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card">
              <ul className="timeline-list">
                {reservationJourney.map((item, index) => (
                  <li key={item.title}>
                    <span className="timeline-index">0{index + 1}</span>
                    <div className="stack">
                      <strong>{item.title}</strong>
                      <p className="microcopy">{item.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cta-row">
              <Link href="/contact" className="button-ghost">
                Demande de groupe ou privatisation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-surface--light section--light">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow="Organisation"
              title="Une intégration propre avant tout."
              lead="La meilleure V1 consiste à ouvrir Zenchef depuis le site avec un habillage cohérent, puis à laisser Zenchef gérer les règles métier, les créneaux et les confirmations."
            />
          </Reveal>

          <div className="grid-three">
            {reservationPractices.map((item) => (
              <Reveal key={item.label}>
                <article className="surface-card surface-card--light">
                  <p className="kicker">{item.label}</p>
                  <p className="microcopy">{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="surface-card surface-card--light">
              <p className="kicker">Mise en place</p>
              <ul className="detail-list">
                {zenchefSetupSteps.map((step) => (
                  <li key={step}>
                    <span className="detail-title">{siteConfig.bookingProvider}</span>
                    <span className="detail-copy">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
