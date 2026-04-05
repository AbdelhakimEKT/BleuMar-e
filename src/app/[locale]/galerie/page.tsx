import type { Metadata } from "next";
import Link from "next/link";

import { EditorialGallery } from "@/components/gallery/editorial-gallery";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { getGalleryContent } from "@/content/gallery";
import { resolveLocale } from "@/i18n/server";
import { withLocale } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { getGalleryPageData } from "@/sanity/loaders";

import styles from "./gallery-page.module.css";

type GalleryPageProps = {
  params: Promise<{ locale: string }>;
};

const galleryMetaCopy = {
  fr: {
    title: "Galerie",
    description:
      "Explorez la galerie Bleu Marée: salle, assiettes, lumière et détails d'une table gastronomique à Biarritz."
  },
  en: {
    title: "Gallery",
    description:
      "Explore the Bleu Maree gallery: dining room, plates, light, and details from a fine dining table in Biarritz."
  }
} as const;

const galleryPageCopy = {
  fr: {
    overviewLabel: "Manière de regarder",
    overviewLine: "Regarder ici, c'est déjà sentir comment la maison tient.",
    overviewPoints: [
      {
        title: "Salle",
        copy: "Le lieu donne la mesure avant même la première assiette."
      },
      {
        title: "Geste",
        copy: "Le service ne se montre jamais trop, et c'est précisément ce qui marque."
      },
      {
        title: "Matière",
        copy: "Le produit, le verre et la lumière finissent le travail sans un mot de plus."
      }
    ],
    notesLabel: "Ce qui reste",
    closingQuote: "Une image juste n'épuise rien. Elle donne envie d'y être."
  },
  en: {
    overviewLabel: "How to look",
    overviewLine: "Looking here already gives the measure of how the house holds itself.",
    overviewPoints: [
      {
        title: "Room",
        copy: "The place sets the measure before the first plate ever arrives."
      },
      {
        title: "Gesture",
        copy: "Service never shows too much of itself, and that is exactly what stays."
      },
      {
        title: "Material",
        copy: "Product, glass, and light finish the work without one word too many."
      }
    ],
    notesLabel: "What remains",
    closingQuote: "A right image exhausts nothing. It simply leaves the desire to be there."
  }
} as const;

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = galleryMetaCopy[locale];

  return createMetadata({
    locale,
    path: "/galerie",
    title: copy.title,
    description: copy.description
  });
}

export default async function LocalizedGalleryPage({ params }: GalleryPageProps) {
  const locale = await resolveLocale(params);
  const content = getGalleryContent(locale);
  const copy = galleryPageCopy[locale];
  const galleryPageData = await getGalleryPageData(locale);

  return (
    <>
      <PageHero
        eyebrow={content.pageHero.eyebrow}
        title={content.pageHero.title}
        intro={content.pageHero.intro}
        image={content.pageHero.image}
        imagePosition={content.pageHero.imagePosition}
        markers={content.pageHero.markers}
        noteLabel={content.pageHero.noteLabel}
        note={content.pageHero.note}
      />

      <section
        className={`section section-surface--light section--light ${styles.overviewSection}`}
      >
        <div className={`container ${styles.overviewGrid}`}>
          <Reveal className={styles.overviewCopy}>
            <div className="eyebrow">{content.sectionIntro.eyebrow}</div>
            <h2 className={styles.sectionTitle}>{content.sectionIntro.title}</h2>
            <p className={styles.sectionLead}>{content.sectionIntro.lead}</p>
            <p className={styles.overviewLine}>{copy.overviewLine}</p>
          </Reveal>

          <Reveal className={styles.overviewPanel}>
            <p className={styles.panelLabel}>{copy.overviewLabel}</p>
            <ul className={styles.overviewList}>
              {copy.overviewPoints.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}</strong>
                  <span>{point.copy}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className={`section ${styles.gallerySection}`}>
        <div className={`container ${styles.galleryStack}`}>
          <EditorialGallery
            locale={locale}
            opening={content.openingFeature}
            sequences={content.sequences}
            archive={content.archive}
            items={galleryPageData.galleryItems}
          />
        </div>
      </section>

      <section className={`section section-surface ${styles.closingSection}`}>
        <div className={`container ${styles.closingGrid}`}>
          <Reveal className={styles.closingCopy}>
            <div className="eyebrow">{content.projectFollowUp.eyebrow}</div>
            <h2 className={styles.sectionTitle}>{content.projectFollowUp.title}</h2>
            <p className={styles.sectionLead}>{content.projectFollowUp.lead}</p>
            <p className={styles.closingQuote}>{copy.closingQuote}</p>
            <div className={styles.actions}>
              <Link href={withLocale(locale, "/reservation")} className="button">
                {content.projectFollowUp.reserve}
              </Link>
              <Link href={withLocale(locale, "/contact")} className="button-ghost">
                {content.projectFollowUp.contact}
              </Link>
            </div>
          </Reveal>

          <Reveal className={styles.closingPanel}>
            <div className={styles.panelWrap}>
              <p className={styles.panelLabel}>{copy.notesLabel}</p>
              <h3 className={styles.panelTitle}>{content.projectFollowUp.notesTitle}</h3>
              <p className={styles.panelCopy}>{content.projectFollowUp.notesCopy}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
