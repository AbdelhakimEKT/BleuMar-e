import Link from "next/link";

import {
  getChapterTone,
  getChapterVisualConfig,
  getMenuPdfHref,
  slugify,
  type ChapterTone
} from "@/content/menu-visuals";
import type { MenuSection } from "@/content/menus";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

import { MenuChapterGallery } from "./menu-chapter-gallery";
import { Reveal } from "../ui/reveal";
import styles from "./editorial-menu-experience.module.css";

type EditorialMenuExperienceProps = {
  locale: Locale;
  intro: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  sections: MenuSection[];
  notes: string[];
};

const editorialCopy = {
  fr: {
    railLabel: "Navigation de la carte",
    rhythmEyebrow: "Trois repères",
    rhythmCards: [
      {
        label: "Déjeuner",
        value: "Midi net",
        copy: "Une proposition courte, lumineuse et tenue pour déjeuner avec précision sans alourdir la journée."
      },
      {
        label: "Dégustation",
        value: "5 à 7 temps",
        copy: "Des parcours qui avancent par vagues calmes, entre fraîcheur marine, profondeur et finale claire."
      },
      {
        label: "Cave & accords",
        value: "À bonne distance",
        copy: "Les verres prolongent la carte sans jamais prendre la scène, avec la même retenue que les assiettes."
      }
    ],
    labels: {
      classic: "À la carte",
      tasting: "Parcours dégustation",
      sea: "Produits de la mer",
      cellar: "Cave & accords",
      event: "Moment signature"
    },
    notesEyebrow: "Repères",
    notesTitle: "Quelques indications pour choisir votre heure et votre humeur.",
    finaleEyebrow: "Réserver",
    finaleTitle: "Choisir l'heure, puis laisser la maison conduire la suite.",
    finaleCopy:
      "Les menus évoluent avec les arrivages, les saisons et certains rendez-vous de la maison. La réservation permet ensuite de signaler allergies, occasions et préférences dans le même esprit de clarté.",
    reserveLabel: "Réserver",
    contactLabel: "Demander la carte PDF",
    itemCount: {
      classic: "propositions",
      tasting: "temps",
      cellar: "repères",
      event: "moment",
      sea: "propositions"
    }
  },
  en: {
    railLabel: "Menu navigation",
    rhythmEyebrow: "Three markers",
    rhythmCards: [
      {
        label: "Lunch",
        value: "Midday clarity",
        copy: "A concise, luminous proposal designed for lunch with precision and without heaviness."
      },
      {
        label: "Tasting",
        value: "5 to 7 courses",
        copy: "Paths that unfold in calm waves between marine freshness, depth, and a clear ending."
      },
      {
        label: "Cellar & pairings",
        value: "At the right distance",
        copy: "Glasses and bottles extend the menu without taking over, with the same restraint as the plates."
      }
    ],
    labels: {
      classic: "A la carte",
      tasting: "Tasting journey",
      sea: "Sea produce",
      cellar: "Cellar & pairings",
      event: "Signature moment"
    },
    notesEyebrow: "Guidance",
    notesTitle: "A few pointers before choosing the right hour and mood.",
    finaleEyebrow: "Booking",
    finaleTitle: "Choose the hour, then let the house lead the rest.",
    finaleCopy:
      "Menus evolve with arrivals, the season, and certain house moments. Booking then leaves room for allergies, occasions, and personal preferences in the same spirit of clarity.",
    reserveLabel: "Book",
    contactLabel: "Request the PDF",
    itemCount: {
      classic: "dishes",
      tasting: "courses",
      cellar: "markers",
      event: "feature",
      sea: "dishes"
    }
  }
} as const;

function formatItemCount(count: number, tone: ChapterTone, locale: Locale) {
  const unit = editorialCopy[locale].itemCount[tone];
  return `${count.toString().padStart(2, "0")} ${unit}`;
}

function isGenericSubtitle(value: string, locale: Locale) {
  const normalized = slugify(value);

  if (locale === "fr") {
    return normalized === "a-la-carte";
  }

  return normalized === "a-la-carte";
}

function getMediaLabel(section: MenuSection, tone: ChapterTone, locale: Locale) {
  if (!isGenericSubtitle(section.subtitle, locale)) {
    return section.subtitle;
  }

  return tone === "classic" ? section.title : editorialCopy[locale].labels[tone];
}

function getTags(section: MenuSection) {
  return Array.from(
    new Set(
      section.items
        .map((item) => item.tag?.trim())
        .filter((tag): tag is string => Boolean(tag))
    )
  );
}

export function EditorialMenuExperience({
  locale,
  intro,
  sections,
  notes
}: EditorialMenuExperienceProps) {
  const copy = editorialCopy[locale];
  const pdfHref = getMenuPdfHref(locale);

  return (
    <div className={styles.experience}>
      <Reveal>
        <section className={styles.prelude}>
          <div className={styles.preludeCopy}>
            <p className="eyebrow">{intro.eyebrow}</p>
            <h2 className={styles.preludeTitle}>{intro.title}</h2>
            <p className={styles.preludeLead}>{intro.lead}</p>
          </div>

          <div className={styles.rhythmPanel}>
            <p className={styles.rhythmEyebrow}>{copy.rhythmEyebrow}</p>
            <div className={styles.rhythmGrid}>
              {copy.rhythmCards.map((card) => (
                <div key={card.label} className={styles.rhythmCard}>
                  <p className={styles.rhythmLabel}>{card.label}</p>
                  <p className={styles.rhythmValue}>{card.value}</p>
                  <p className={styles.rhythmCopy}>{card.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <nav aria-label={copy.railLabel} className={styles.anchorRail}>
          {sections.map((section, index) => (
            <a key={section.title} href={`#${slugify(section.title)}`} className={styles.anchorChip}>
              <span className={styles.anchorIndex}>{(index + 1).toString().padStart(2, "0")}</span>
              <span>{section.title}</span>
            </a>
          ))}
        </nav>
      </Reveal>

      <div className={styles.chapterStack}>
        {sections.map((section, index) => {
          const tone = getChapterTone(section.title);
          const tags = getTags(section);
          const visualConfig = getChapterVisualConfig(section.title, tone);
          const sectionId = slugify(section.title);
          const subtitle = isGenericSubtitle(section.subtitle, locale) ? null : section.subtitle;

          return (
            <Reveal key={section.title}>
              <article
                id={sectionId}
                className={[
                  styles.chapter,
                  styles[`tone${tone[0].toUpperCase()}${tone.slice(1)}` as keyof typeof styles]
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={styles.chapterMedia}>
                  <MenuChapterGallery
                    title={section.title}
                    images={visualConfig.images}
                    fallbackImage={visualConfig.fallbackImage}
                    autoplay={visualConfig.autoplay}
                  />

                  <div className={styles.mediaBadge}>
                    <span>{getMediaLabel(section, tone, locale)}</span>
                  </div>
                </div>

                <div className={styles.chapterBody}>
                  <div className={styles.chapterHeader}>
                    <div>
                      <p className={styles.chapterIndex}>
                        {(index + 1).toString().padStart(2, "0")}
                      </p>
                    </div>

                    <div className={styles.metaCapsule}>
                      <span>{formatItemCount(section.items.length, tone, locale)}</span>
                    </div>
                  </div>

                  <div className={styles.chapterTitleBlock}>
                    {subtitle ? <p className={styles.chapterSubtitle}>{subtitle}</p> : null}
                    <h3 className={styles.chapterTitle}>{section.title}</h3>
                    <p className={styles.chapterDescription}>{section.description}</p>
                  </div>

                  <div className={styles.chapterMeta}>
                    <span className={styles.metaPill}>{section.priceHint}</span>
                    {tags.map((tag) => (
                      <span key={`${section.title}-${tag}`} className={styles.metaPillMuted}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className={styles.itemList}>
                    {section.items.map((item) => (
                      <li key={`${section.title}-${item.name}`} className={styles.itemRow}>
                        <div className={styles.itemHeader}>
                          <h4 className={styles.itemName}>{item.name}</h4>
                          <span className={styles.itemPrice}>{item.price}</span>
                        </div>

                        <p className={styles.itemDescription}>{item.description}</p>

                        {item.tag ? <span className={styles.itemTag}>{item.tag}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <section className={styles.notesPanel}>
          <div className={styles.notesHeader}>
            <p className="eyebrow">{copy.notesEyebrow}</p>
            <h3 className={styles.notesTitle}>{copy.notesTitle}</h3>
          </div>

          <div className={styles.notesGrid}>
            {notes.map((note) => (
              <div key={note} className={styles.noteCard}>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className={styles.finale}>
          <div className={styles.finaleCopy}>
            <p className="eyebrow">{copy.finaleEyebrow}</p>
            <h3 className={styles.finaleTitle}>{copy.finaleTitle}</h3>
            <p className={styles.finaleText}>{copy.finaleCopy}</p>
          </div>

          <div className={styles.finaleActions}>
            <Link href={withLocale(locale, "/reservation")} className="button">
              {copy.reserveLabel}
            </Link>
            <a href={pdfHref} className="button-ghost" download>
              {copy.contactLabel}
            </a>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
