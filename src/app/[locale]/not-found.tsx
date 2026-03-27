"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocaleFromPathname, withLocale } from "@/i18n/routing";
import { getUiCopy } from "@/i18n/ui";

export default function LocaleNotFound() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = getUiCopy(locale).notFound;

  return (
    <section className="section">
      <div className="container split-layout">
        <div className="stack">
          <div className="eyebrow">{copy.eyebrow}</div>
          <h1 className="page-title">{copy.title}</h1>
          <p className="lead">{copy.intro}</p>
          <div className="cta-row">
            <Link href={withLocale(locale, "/")} className="button">
              {copy.home}
            </Link>
            <Link href={withLocale(locale, "/reservation")} className="button-secondary">
              {copy.reservation}
            </Link>
          </div>
        </div>

        <div className="surface-card">
          <p className="kicker">Bleu Marée</p>
          <p className="microcopy">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
