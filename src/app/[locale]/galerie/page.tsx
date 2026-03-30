import type { Metadata } from "next";
import Link from "next/link";

import { EditorialGallery } from "@/components/gallery/editorial-gallery";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import { getGalleryContent } from "@/content/gallery";
import { resolveLocale } from "@/i18n/server";
import { withLocale } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { getGalleryPageData } from "@/sanity/loaders";

type GalleryPageProps = {
  params: Promise<{ locale: string }>;
};

const galleryMetaCopy = {
  fr: {
    title: "Galerie",
    description:
      "Explorez la galerie Bleu Maree: salle, assiettes, ambiance et details premium d'un restaurant gastronomique a Biarritz."
  },
  en: {
    title: "Gallery",
    description:
      "Explore the Bleu Maree gallery: dining room, plates, atmosphere, and premium details from a fine dining restaurant in Biarritz."
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
  const galleryPageData = await getGalleryPageData(locale);

  return (
    <>
      <PageHero
        eyebrow={content.pageHero.eyebrow}
        title={content.pageHero.title}
        intro={content.pageHero.intro}
        image={content.pageHero.image}
        imagePosition={content.pageHero.imagePosition}
      />

      <section className="section">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow={content.sectionIntro.eyebrow}
              title={content.sectionIntro.title}
              lead={content.sectionIntro.lead}
            />
          </Reveal>

          <EditorialGallery
            locale={locale}
            opening={content.openingFeature}
            sequences={content.sequences}
            archive={content.archive}
            items={galleryPageData.galleryItems}
          />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container split-layout">
          <Reveal className="stack">
            <div className="eyebrow">{content.projectFollowUp.eyebrow}</div>
            <h2 className="section-title">{content.projectFollowUp.title}</h2>
            <p className="lead">{content.projectFollowUp.lead}</p>
            <div className="cta-row">
              <Link href={withLocale(locale, "/reservation")} className="button">
                {content.projectFollowUp.reserve}
              </Link>
              <Link href={withLocale(locale, "/contact")} className="button-ghost">
                {content.projectFollowUp.contact}
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="surface-card">
              <p className="kicker">{content.projectFollowUp.notesTitle}</p>
              <p className="microcopy">{content.projectFollowUp.notesCopy}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
