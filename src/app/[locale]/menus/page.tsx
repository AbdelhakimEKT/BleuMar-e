import type { Metadata } from "next";

import { EditorialSplit } from "@/components/blocks/editorial-split";
import { EditorialMenuExperience } from "@/components/menus/editorial-menu-experience";
import { getMenuPdfHref } from "@/content/menu-visuals";
import { PageHero } from "@/components/ui/page-hero";
import { getMenusContent } from "@/content/menus";
import { resolveLocale } from "@/i18n/server";
import { withLocale } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { getMenusPageData } from "@/sanity/loaders";

type MenusPageProps = {
  params: Promise<{ locale: string }>;
};

const menusMetaCopy = {
  fr: {
    title: "Menus",
    description:
      "Parcourez les menus degustation, la carte du dejeuner, la cave et les assiettes signatures de Bleu Maree a Biarritz."
  },
  en: {
    title: "Menus",
    description:
      "Browse the tasting menus, lunch menu, cellar, and signature plates of Bleu Maree in Biarritz."
  }
} as const;

export async function generateMetadata({ params }: MenusPageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = menusMetaCopy[locale];

  return createMetadata({
    locale,
    path: "/menus",
    title: copy.title,
    description: copy.description
  });
}

export default async function LocalizedMenusPage({ params }: MenusPageProps) {
  const locale = await resolveLocale(params);
  const content = getMenusContent(locale);
  const menusPageData = await getMenusPageData(locale);
  const pdfHref = getMenuPdfHref(locale);

  return (
    <>
      <PageHero
        eyebrow={content.pageHero.eyebrow}
        title={content.pageHero.title}
        intro={content.pageHero.intro}
        image={content.pageHero.image}
        imagePosition={content.pageHero.imagePosition}
      />

      <section className="section section-surface--light section--light">
        <div className="container stack">
          <EditorialMenuExperience
            locale={locale}
            intro={content.sectionIntro}
            sections={menusPageData.menuSections}
            notes={menusPageData.menuNotes}
          />
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <EditorialSplit
            eyebrow={content.seasonalitySplit.eyebrow}
            title={content.seasonalitySplit.title}
            intro={content.seasonalitySplit.intro}
            paragraphs={content.seasonalitySplit.paragraphs}
            image={content.seasonalitySplit.image}
            imageAlt={content.seasonalitySplit.imageAlt}
            imagePosition={content.seasonalitySplit.imagePosition}
            actions={[
              {
                href: withLocale(locale, "/reservation"),
                label: content.seasonalitySplit.actions.reserve,
                variant: "primary"
              },
              {
                href: pdfHref,
                label: content.seasonalitySplit.actions.pdf,
                variant: "ghost",
                download: true
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
