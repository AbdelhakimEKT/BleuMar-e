import type { Metadata } from "next";

import { resolveLocale } from "@/i18n/server";
import { getUiCopy } from "@/i18n/ui";
import { createMetadata } from "@/lib/metadata";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = getUiCopy(locale).privacy;

  return createMetadata({
    locale,
    path: "/politique-confidentialite",
    title: locale === "fr" ? "Politique de confidentialite" : "Privacy policy",
    description: copy.title
  });
}

export default async function LocalizedPrivacyPage({ params }: PrivacyPageProps) {
  const locale = await resolveLocale(params);
  const copy = getUiCopy(locale).privacy;

  return (
    <section className="section section-surface--light section--light">
      <div className="container legal-copy">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="page-title">{copy.title}</h1>
        </div>

        <section>
          <h2>{copy.collectedDataTitle}</h2>
          <p>{copy.collectedDataCopy}</p>
        </section>

        <section>
          <h2>{copy.purposeTitle}</h2>
          <p>{copy.purposeCopy}</p>
        </section>

        <section>
          <h2>{copy.retentionTitle}</h2>
          <p>{copy.retentionCopy}</p>
        </section>

        <section>
          <h2>{copy.cookiesTitle}</h2>
          <p>{copy.cookiesCopy}</p>
        </section>
      </div>
    </section>
  );
}
