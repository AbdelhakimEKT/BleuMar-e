import Link from "next/link";

import { GalleryMosaic } from "@/components/blocks/gallery-mosaic";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/metadata";
import { getGalleryPageData } from "@/sanity/loaders";

export const metadata = createMetadata({
  title: "Galerie",
  description:
    "Explorez la galerie Bleu Marée: salle, assiettes, ambiance et détails premium d'un restaurant gastronomique à Biarritz."
});

export default async function GaleriePage() {
  const galleryPageData = await getGalleryPageData();

  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Des images qui donnent envie avant même de lire."
        intro="Plats, salle, lumière, matières et gestes: la galerie renforce la projection du visiteur et nourrit la dimension premium de l'expérience."
        image="/images/details/bleu-maree-detail-table-setting.jpg"
      />

      <section className="section">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow="Ambiance"
              title="Un récit visuel construit autour du désir."
              lead="Les images validées sont déjà organisées pour servir plusieurs usages: hero, sections éditoriales, galerie immersive et conversions."
            />
          </Reveal>

          <GalleryMosaic items={galleryPageData.galleryItems} />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container split-layout">
          <Reveal className="stack">
            <div className="eyebrow">Suite du projet</div>
            <h2 className="section-title">La galerie est prête à s'enrichir sans perdre sa cohérence.</h2>
            <p className="lead">
              Façade de nuit, accord mets-vins, visuel extérieur ou second portrait d'équipe pourront
              s'intégrer naturellement à cette composition.
            </p>
            <div className="cta-row">
              <Link href="/reservation" className="button">
                Réserver une expérience
              </Link>
              <Link href="/contact" className="button-ghost">
                Planifier une séance photo
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="surface-card">
              <p className="kicker">Gestion admin</p>
              <p className="microcopy">
                La structure de contenu permet de brancher ensuite un back-office simple pour publier,
                remplacer ou archiver les visuels validés.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
