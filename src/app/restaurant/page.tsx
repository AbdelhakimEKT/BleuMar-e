import { EditorialSplit } from "@/components/blocks/editorial-split";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import {
  atmosphereDetails,
  craftsmanshipMoments,
  sourcingPillars,
  storyContent,
  teamMoments
} from "@/content/restaurant";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Le restaurant",
  description:
    "Découvrez l'histoire, la philosophie culinaire et l'ambiance élégante de Bleu Marée, restaurant gastronomique premium à Biarritz."
});

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        eyebrow="Le restaurant"
        title="Une maison où l'élégance reste vivante."
        intro="Histoire, vision culinaire, travail de l'équipe et atmosphère: le site structure un vrai récit de marque, plus humain et plus premium."
        image="/images/hero/bleu-maree-hero-atlantic-dining-room.png"
      />

      <section className="section">
        <div className="container">
          <EditorialSplit
            eyebrow={storyContent.eyebrow}
            title={storyContent.title}
            intro={storyContent.intro}
            paragraphs={storyContent.paragraphs}
            image={storyContent.image}
            imageAlt="Portrait du chef de Bleu Marée"
            actions={[{ href: "/reservation", label: "Réserver une table" }]}
          />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow="Fondations"
              title="Trois piliers pour raconter la maison sans lourdeur."
              lead="La page alterne storytelling, détails concrets et visuels d'équipe pour donner de la profondeur sans perdre la clarté."
            />
          </Reveal>

          <div className="feature-grid">
            {sourcingPillars.map((item) => (
              <Reveal key={item.title} className="feature-item">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-copy">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <EditorialSplit
            title={teamMoments.title}
            intro={teamMoments.copy}
            image={teamMoments.image}
            imageAlt="Équipe Bleu Marée"
            details={atmosphereDetails}
          />

          <div className="page-spacer" />

          <EditorialSplit
            title={craftsmanshipMoments.title}
            intro={craftsmanshipMoments.copy}
            image={craftsmanshipMoments.image}
            imageAlt="Dressage en cuisine chez Bleu Marée"
            reverse
            actions={[
              { href: "/experiences", label: "Voir les expériences", variant: "secondary" },
              { href: "/contact", label: "Nous écrire", variant: "ghost" }
            ]}
          />
        </div>
      </section>
    </>
  );
}
