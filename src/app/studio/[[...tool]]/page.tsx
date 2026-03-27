import type { Metadata } from "next";
import { metadata as studioMetadata, NextStudio, viewport as studioViewport } from "next-sanity/studio";

import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Bleu Marée Studio"
};

export const viewport = studioViewport;
export const dynamic = "force-static";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main style={{ padding: "40px", fontFamily: "system-ui, sans-serif", lineHeight: 1.6 }}>
        <h1>Configuration Sanity requise</h1>
        <p>
          Ajoutez au minimum <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> dans l&apos;environnement pour
          activer le studio.
        </p>
        <p>
          Vous pouvez partir du fichier <code>.env.example</code> déjà ajouté au projet.
        </p>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
