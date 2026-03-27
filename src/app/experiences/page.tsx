import Link from "next/link";

import { EditorialSplit } from "@/components/blocks/editorial-split";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/metadata";
import { getExperiencesPageData } from "@/sanity/loaders";

export const metadata = createMetadata({
  title: "Expériences",
  description:
    "Valorisez les soirées spéciales, menus saisonniers, collaborations et privatisations de Bleu Marée."
});

export default async function ExperiencesPage() {
  const experiencesPageData = await getExperiencesPageData();

  return (
    <>
      <PageHero
        eyebrow="Expériences"
        title="Soirées spéciales, moments rares et privatisations sur mesure."
        intro="Le site prévoit une page dédiée aux temps forts de la maison, pensée pour être simple à alimenter et forte en désir."
        image="/images/hero/bleu-maree-hero-atlantic-dining-room.png"
      />

      <section className="section">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow="À venir"
              title="Des événements qui prolongent naturellement l'univers du restaurant."
              lead="Chaque événement peut accueillir une date, une heure, une description, un visuel dédié et une action immédiate vers la réservation ou le contact."
            />
          </Reveal>

          <div className="event-grid">
            {experiencesPageData.upcomingExperiences.map((event) => (
              <Reveal key={event.title}>
                <article className="surface-card">
                  <div className="stack">
                    <div className="event-meta">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    <h2 className="section-title" style={{ fontSize: "2rem" }}>
                      {event.title}
                    </h2>
                    <p className="microcopy">{event.description}</p>
                    <Link href={event.ctaHref} className="button-ghost">
                      {event.ctaLabel}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <EditorialSplit
            eyebrow="Privatisation"
            title="Une scénographie discrète pour les événements privés."
            intro="Bleu Marée peut accueillir des dîners de direction, des lancements ou des célébrations avec une qualité de service cohérente avec le positionnement premium."
            details={experiencesPageData.privateDiningPoints.map((item) => ({
              label: "Expérience",
              copy: item
            }))}
            image="/images/details/bleu-maree-detail-table-setting.jpg"
            imageAlt="Mise en scène de table premium"
            actions={[
              { href: "/contact", label: "Demander une privatisation" },
              { href: "/reservation", label: "Réserver une table", variant: "secondary" }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow="Saisonnalité"
              title="Une page prête pour les temps forts du calendrier."
              lead="Menus de fête, collaborations, soirées dégustation ou programmation saisonnière: la structure garde la main légère tout en restant très administrable."
            />
          </Reveal>

          <div className="feature-grid">
            {experiencesPageData.seasonalMoments.map((item) => (
              <Reveal key={item.title} className="feature-item">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-copy">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
