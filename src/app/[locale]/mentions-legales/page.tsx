import type { Metadata } from "next";

import { resolveLocale } from "@/i18n/server";
import { getUiCopy } from "@/i18n/ui";
import { createMetadata } from "@/lib/metadata";

type LegalPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = getUiCopy(locale).legal;

  return createMetadata({
    locale,
    path: "/mentions-legales",
    title: locale === "fr" ? "Mentions legales" : "Legal notice",
    description: copy.title
  });
}

export default async function LocalizedLegalPage({ params }: LegalPageProps) {
  const locale = await resolveLocale(params);
  const copy = getUiCopy(locale).legal;

  return (
    <section className="section section-surface--light section--light">
      <div className="container legal-copy">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="page-title">{copy.title}</h1>
        </div>

        <section>
          <h2>{copy.publisherTitle}</h2>
          <p>{copy.publisherCopy}</p>
        </section>

        <section>
          <h2>{copy.hostingTitle}</h2>
          <p>{copy.hostingCopy}</p>
        </section>

        <section>
          <h2>{copy.intellectualPropertyTitle}</h2>
          <p>{copy.intellectualPropertyCopy}</p>
        </section>
      </div>
    </section>
  );
}
