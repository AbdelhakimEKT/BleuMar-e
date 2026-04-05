import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { HomeReveal } from "@/components/home/home-reveal";
import { MenuChapterGallery } from "@/components/menus/menu-chapter-gallery";
import { PageHero } from "@/components/ui/page-hero";
import {
  getChapterTone,
  getChapterVisualConfig,
  getMenuPdfHref,
  slugify
} from "@/content/menu-visuals";
import { getMenusContent, type MenuSection } from "@/content/menus";
import { withLocale } from "@/i18n/routing";
import { resolveLocale } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";
import { getMenusPageData } from "@/sanity/loaders";

import styles from "./menus-page.module.css";

type MenusPageProps = {
  params: Promise<{ locale: string }>;
};

const menusMetaCopy = {
  fr: {
    title: "La carte",
    description:
      "La carte Bleu Marée à Biarritz: déjeuner, dégustation, à la carte, cave et accords, dans un même rythme de maison."
  },
  en: {
    title: "The menu",
    description:
      "The Bleu Maree menu in Biarritz: lunch, tasting, a la carte, cellar, and pairings carried by the same house rhythm."
  }
} as const;

const menusPageCopy = {
  fr: {
    navigationLabel: "Rythme de la carte",
    overviewLine: "La carte n'argumente pas. Elle pose un rythme.",
    rhythmPoints: [
      { id: "dejeuner", label: "Déjeuner", copy: "Court, net, lumineux." },
      { id: "degustation", label: "Dégustation", copy: "Le temps s'allonge, jamais la ligne." },
      { id: "carte", label: "À la carte", copy: "Composer librement, sans perdre la tenue." },
      { id: "cave", label: "Cave & accords", copy: "À bonne distance de l'assiette." }
    ],
    lunchEyebrow: "Le midi",
    lunchTitle: "Le déjeuner doit tenir en peu de gestes.",
    tastingEyebrow: "Dégustation",
    tastingTitle: "Quand le temps s'allonge, la maison prend toute sa mesure.",
    tastingLead:
      "Cinq temps pour la netteté. Sept pour l'amplitude. Dans les deux cas, le rythme reste calme.",
    aLaCarteEyebrow: "À la carte",
    aLaCarteTitle: "Composer soi-même, sans faire monter le bruit.",
    aLaCarteLead:
      "Entrées, mer, viandes et desserts gardent chacun leur place. La lecture reste simple, le désir aussi.",
    cellarEyebrow: "Cave & accords",
    cellarTitle: "La cave accompagne. Elle ne corrige rien.",
    cellarLead:
      "Verres, bouteilles et accords prolongent la cuisine avec le même calme, la même précision.",
    notesLabel: "Repères de maison",
    eventEyebrow: "Moment de maison"
  },
  en: {
    navigationLabel: "Menu rhythm",
    overviewLine: "The menu does not argue. It sets a rhythm.",
    rhythmPoints: [
      { id: "dejeuner", label: "Lunch", copy: "Short, clear, luminous." },
      { id: "degustation", label: "Tasting", copy: "Longer in time, never looser in line." },
      { id: "carte", label: "A la carte", copy: "Freedom without losing hold." },
      { id: "cave", label: "Cellar & pairings", copy: "Always at the right distance." }
    ],
    lunchEyebrow: "Midday",
    lunchTitle: "Lunch should hold with very few gestures.",
    tastingEyebrow: "Tasting",
    tastingTitle: "When time stretches, the house shows its full measure.",
    tastingLead:
      "Five courses for clarity. Seven for amplitude. In both cases, the rhythm stays calm.",
    aLaCarteEyebrow: "A la carte",
    aLaCarteTitle: "Compose the meal freely, without raising the noise.",
    aLaCarteLead:
      "Starters, seafood, meats, and desserts each keep their place. Reading stays simple, and so does desire.",
    cellarEyebrow: "Cellar & pairings",
    cellarTitle: "The cellar accompanies. It does not correct.",
    cellarLead:
      "Glasses, bottles, and pairings extend the kitchen with the same calm and the same precision.",
    notesLabel: "House notes",
    eventEyebrow: "House moment"
  }
} as const;

function getSectionKey(section: MenuSection) {
  return slugify(section.title);
}

function isLunchSection(section: MenuSection) {
  const key = getSectionKey(section);
  return key.includes("menu-dejeuner") || key.includes("lunch-menu");
}

function isTastingSection(section: MenuSection) {
  const key = getSectionKey(section);
  return key.includes("degustation") || key.includes("tasting");
}

function isCellarSection(section: MenuSection) {
  return getChapterTone(section.title) === "cellar";
}

function isEventSection(section: MenuSection) {
  return getChapterTone(section.title) === "event";
}

function isPlaceholderEvent(section: MenuSection) {
  return section.items.some((item) => {
    const key = slugify(item.name);
    return key === "exemple-de-menu-special" || key === "sample-special-menu";
  });
}

function isGenericSubtitle(subtitle: string) {
  return slugify(subtitle) === "a-la-carte";
}

function buildVisualGroup(sections: MenuSection[]) {
  const images: Array<{ src: string; position?: string }> = [];
  let fallbackImage: { src: string; position?: string } | undefined;
  let autoplay = false;

  for (const section of sections) {
    const tone = getChapterTone(section.title);
    const visualConfig = getChapterVisualConfig(section.title, tone);

    autoplay = autoplay || Boolean(visualConfig.autoplay);
    fallbackImage = fallbackImage ?? visualConfig.fallbackImage ?? visualConfig.images[0];

    for (const image of visualConfig.images) {
      if (!images.some((entry) => entry.src === image.src)) {
        images.push(image);
      }
    }
  }

  return {
    images,
    fallbackImage,
    autoplay: autoplay && images.length > 1
  };
}

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
  const pageData = await getMenusPageData(locale);
  const copy = menusPageCopy[locale];
  const pdfHref = getMenuPdfHref(locale);

  const eventSection = pageData.menuSections.find(
    (section) => isEventSection(section) && !isPlaceholderEvent(section)
  );
  const visibleSections = pageData.menuSections.filter(
    (section) => !isEventSection(section) || !isPlaceholderEvent(section)
  );
  const lunchSection = visibleSections.find(isLunchSection);
  const tastingSections = visibleSections.filter(isTastingSection);
  const cellarSections = visibleSections.filter(isCellarSection);
  const aLaCarteSections = visibleSections.filter(
    (section) =>
      !isLunchSection(section) &&
      !isTastingSection(section) &&
      !isCellarSection(section) &&
      !isEventSection(section)
  );

  const lunchVisuals = lunchSection ? buildVisualGroup([lunchSection]) : null;
  const tastingVisuals = buildVisualGroup(tastingSections);
  const aLaCarteVisuals = buildVisualGroup(aLaCarteSections);
  const cellarVisuals = buildVisualGroup(cellarSections);

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

      <section className={`section section-surface--light section--light ${styles.overviewSection}`}>
        <div className={`container ${styles.overviewGrid}`}>
          <HomeReveal className={styles.overviewCopy}>
            <div className="eyebrow">{content.sectionIntro.eyebrow}</div>
            <h2 className={styles.sectionTitle}>{content.sectionIntro.title}</h2>
            <p className={styles.sectionLead}>{content.sectionIntro.lead}</p>
            <p className={styles.overviewLine}>{copy.overviewLine}</p>
          </HomeReveal>

          <HomeReveal className={styles.rhythmRail} variant="panel" delay={0.08}>
            <p className={styles.railLabel}>{copy.navigationLabel}</p>
            <nav className={styles.anchorList} aria-label={copy.navigationLabel}>
              {copy.rhythmPoints.map((point) => (
                <a key={point.id} href={`#${point.id}`} className={styles.anchorLink}>
                  <span>{point.label}</span>
                  <strong>{point.copy}</strong>
                </a>
              ))}
            </nav>
          </HomeReveal>
        </div>
      </section>

      {lunchSection && lunchVisuals ? (
        <section
          id="dejeuner"
          className={`section section-surface--light section--light ${styles.featureSection}`}
        >
          <div className={`container ${styles.featureGrid}`}>
            <HomeReveal className={styles.galleryWrap} variant="soft">
              <MenuChapterGallery
                title={lunchSection.title}
                images={lunchVisuals.images}
                fallbackImage={lunchVisuals.fallbackImage}
                autoplay={lunchVisuals.autoplay}
              />
            </HomeReveal>

            <HomeReveal className={styles.featureCopy} delay={0.08}>
              <div className="eyebrow">{copy.lunchEyebrow}</div>
              <p className={styles.sectionLabel}>
                {lunchSection.title}
                <span>{lunchSection.priceHint}</span>
              </p>
              <h2 className={styles.sectionTitle}>{copy.lunchTitle}</h2>
              <p className={styles.sectionLead}>{lunchSection.description}</p>

              <div className={styles.lightMenuPanel}>
                {lunchSection.items.map((item) => (
                  <article key={`${lunchSection.title}-${item.name}`} className={styles.lightMenuRow}>
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemName}>{item.name}</h3>
                      <span className={styles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={styles.itemDescription}>{item.description}</p>
                    {item.tag ? <span className={styles.itemTag}>{item.tag}</span> : null}
                  </article>
                ))}
              </div>
            </HomeReveal>
          </div>
        </section>
      ) : null}

      {tastingSections.length > 0 ? (
        <section id="degustation" className={`section section-surface ${styles.tastingSection}`}>
          <div className={`container ${styles.tastingGrid}`}>
            <HomeReveal className={styles.tastingIntro}>
              <div className="eyebrow">{copy.tastingEyebrow}</div>
              <h2 className={styles.sectionTitle}>{copy.tastingTitle}</h2>
              <p className={styles.sectionLead}>{copy.tastingLead}</p>
            </HomeReveal>

            <HomeReveal className={styles.galleryWrap} variant="soft" delay={0.08}>
              <MenuChapterGallery
                title={copy.tastingTitle}
                images={tastingVisuals.images}
                fallbackImage={tastingVisuals.fallbackImage}
                autoplay={tastingVisuals.autoplay}
              />
            </HomeReveal>

            <div className={styles.tastingMenus}>
              {tastingSections.map((section, index) => (
                <HomeReveal
                  key={section.title}
                  className={styles.darkMenuPanel}
                  delay={0.1 + index * 0.06}
                  variant="panel"
                >
                  <div className={styles.panelHeader}>
                    {!isGenericSubtitle(section.subtitle) ? (
                      <p className={styles.panelEyebrow}>{section.subtitle}</p>
                    ) : null}
                    <span className={styles.panelPrice}>{section.priceHint}</span>
                  </div>

                  <h3 className={styles.panelTitle}>{section.title}</h3>
                  <p className={styles.panelIntro}>{section.description}</p>

                  <div className={styles.darkMenuList}>
                    {section.items.map((item) => (
                      <article key={`${section.title}-${item.name}`} className={styles.darkMenuRow}>
                        <div className={styles.itemHeader}>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          <span className={styles.itemPrice}>{item.price}</span>
                        </div>
                        <p className={styles.itemDescription}>{item.description}</p>
                        {item.tag ? <span className={styles.itemTag}>{item.tag}</span> : null}
                      </article>
                    ))}
                  </div>
                </HomeReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {aLaCarteSections.length > 0 ? (
        <section
          id="carte"
          className={`section section-surface--light section--light ${styles.collectionSection}`}
        >
          <div className={`container ${styles.collectionGrid}`}>
            <HomeReveal className={styles.collectionIntro}>
              <div className="eyebrow">{copy.aLaCarteEyebrow}</div>
              <h2 className={styles.sectionTitle}>{copy.aLaCarteTitle}</h2>
              <p className={styles.sectionLead}>{copy.aLaCarteLead}</p>
            </HomeReveal>

            <HomeReveal className={styles.galleryWrap} variant="soft" delay={0.08}>
              <MenuChapterGallery
                title={copy.aLaCarteTitle}
                images={aLaCarteVisuals.images}
                fallbackImage={aLaCarteVisuals.fallbackImage}
                autoplay={aLaCarteVisuals.autoplay}
              />
            </HomeReveal>

            <div className={styles.categoryGrid}>
              {aLaCarteSections.map((section, index) => (
                <HomeReveal
                  key={section.title}
                  className={styles.categoryColumn}
                  delay={0.1 + index * 0.04}
                >
                  <div className={styles.categoryHeader}>
                    {!isGenericSubtitle(section.subtitle) ? (
                      <p className={styles.categoryLabel}>{section.subtitle}</p>
                    ) : null}
                    <span className={styles.categoryPrice}>{section.priceHint}</span>
                  </div>

                  <h3 className={styles.categoryTitle}>{section.title}</h3>
                  <p className={styles.categoryLead}>{section.description}</p>

                  <div className={styles.lightMenuPanel}>
                    {section.items.map((item) => (
                      <article key={`${section.title}-${item.name}`} className={styles.lightMenuRow}>
                        <div className={styles.itemHeader}>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          <span className={styles.itemPrice}>{item.price}</span>
                        </div>
                        <p className={styles.itemDescription}>{item.description}</p>
                        {item.tag ? <span className={styles.itemTag}>{item.tag}</span> : null}
                      </article>
                    ))}
                  </div>
                </HomeReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {cellarSections.length > 0 ? (
        <section id="cave" className={`section ${styles.cellarSection}`}>
          <div className={`container ${styles.cellarGrid}`}>
            <HomeReveal className={styles.cellarCopy}>
              <div className="eyebrow">{copy.cellarEyebrow}</div>
              <h2 className={styles.sectionTitle}>{copy.cellarTitle}</h2>
              <p className={styles.sectionLead}>{copy.cellarLead}</p>
            </HomeReveal>

            <HomeReveal className={styles.galleryWrap} variant="soft" delay={0.08}>
              <MenuChapterGallery
                title={copy.cellarTitle}
                images={cellarVisuals.images}
                fallbackImage={cellarVisuals.fallbackImage}
                autoplay={cellarVisuals.autoplay}
              />
            </HomeReveal>

            <div className={styles.cellarColumns}>
              {cellarSections.map((section, index) => (
                <HomeReveal
                  key={section.title}
                  className={styles.cellarColumn}
                  delay={0.1 + index * 0.06}
                >
                  <div className={styles.panelHeader}>
                    {!isGenericSubtitle(section.subtitle) ? (
                      <p className={styles.panelEyebrow}>{section.subtitle}</p>
                    ) : null}
                    <span className={styles.panelPrice}>{section.priceHint}</span>
                  </div>

                  <h3 className={styles.panelTitle}>{section.title}</h3>
                  <p className={styles.panelIntro}>{section.description}</p>

                  <div className={styles.darkMenuList}>
                    {section.items.map((item) => (
                      <article key={`${section.title}-${item.name}`} className={styles.darkMenuRow}>
                        <div className={styles.itemHeader}>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          <span className={styles.itemPrice}>{item.price}</span>
                        </div>
                        <p className={styles.itemDescription}>{item.description}</p>
                      </article>
                    ))}
                  </div>
                </HomeReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section
        className={`section section-surface--light section--light ${styles.seasonalitySection}`}
      >
        <div className={`container ${styles.seasonalityGrid}`}>
          <HomeReveal className={styles.seasonalityCopy}>
            <div className="eyebrow">{content.seasonalitySplit.eyebrow}</div>
            <h2 className={styles.sectionTitle}>{content.seasonalitySplit.title}</h2>
            <p className={styles.sectionLead}>{content.seasonalitySplit.intro}</p>

            <div className={styles.lightProse}>
              {content.seasonalitySplit.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.actions}>
              <Link href={withLocale(locale, "/reservation")} className="button">
                {content.seasonalitySplit.actions.reserve}
              </Link>
              <a href={pdfHref} className="button-ghost" target="_blank" rel="noreferrer">
                {content.seasonalitySplit.actions.pdf}
              </a>
            </div>
          </HomeReveal>

          <HomeReveal className={styles.seasonalityMedia} variant="soft" delay={0.08}>
            <figure className={`image-frame ${styles.figure}`}>
              <Image
                src={content.seasonalitySplit.image}
                alt={content.seasonalitySplit.imageAlt}
                fill
                sizes="(max-width: 1080px) 100vw, 42vw"
                className={`image-cover ${styles.figureImage}`}
                style={{ objectPosition: content.seasonalitySplit.imagePosition }}
              />
            </figure>
          </HomeReveal>

          <HomeReveal className={styles.noteRail} variant="panel" delay={0.14}>
            <p className={styles.railLabel}>{copy.notesLabel}</p>
            <ul className={styles.noteList}>
              {pageData.menuNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>

            {eventSection ? (
              <div className={styles.eventPanel}>
                <p className={styles.eventEyebrow}>{copy.eventEyebrow}</p>
                <div className={styles.eventHeader}>
                  <strong>{eventSection.title}</strong>
                  <span>{eventSection.priceHint}</span>
                </div>
                <p className={styles.eventCopy}>{eventSection.description}</p>
              </div>
            ) : null}
          </HomeReveal>
        </div>
      </section>
    </>
  );
}
