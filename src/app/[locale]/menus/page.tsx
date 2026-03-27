import type { Metadata } from "next";

import { EditorialSplit } from "@/components/blocks/editorial-split";
import { MenuSections } from "@/components/blocks/menu-sections";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
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

  return (
    <>
      <PageHero
        eyebrow={content.pageHero.eyebrow}
        title={content.pageHero.title}
        intro={content.pageHero.intro}
        image={content.pageHero.image}
      />

      <section className="section section-surface--light section--light">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow={content.sectionIntro.eyebrow}
              title={content.sectionIntro.title}
              lead={content.sectionIntro.lead}
            />
          </Reveal>

          <MenuSections sections={menusPageData.menuSections} />

          <div className="grid-three">
            {menusPageData.menuNotes.map((note) => (
              <Reveal key={note}>
                <div className="notice-panel">{note}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <EditorialSplit
            eyebrow={content.seasonalitySplit.eyebrow}
            title={content.seasonalitySplit.title}
            intro={content.seasonalitySplit.intro}
            paragraphs={content.seasonalitySplit.paragraphs}
            image={content.seasonalitySplit.image}
            imageAlt={content.seasonalitySplit.imageAlt}
            actions={[
              {
                href: withLocale(locale, "/reservation"),
                label: content.seasonalitySplit.actions.reserve,
                variant: "primary"
              },
              {
                href: withLocale(locale, "/contact"),
                label: content.seasonalitySplit.actions.pdf,
                variant: "ghost"
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
