import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site Bleu Marée."
});

export default function MentionsLegalesPage() {
  return (
    <section className="section section-surface--light section--light">
      <div className="container legal-copy">
        <div>
          <p className="eyebrow">Mentions légales</p>
          <h1 className="page-title">Cadre légal du site.</h1>
        </div>

        <section>
          <h2>Éditeur du site</h2>
          <p>
            Site vitrine du restaurant Bleu Marée à Biarritz. Les coordonnées définitives de la
            société exploitante, du directeur de publication et de l'hébergeur devront être
            complétées avant la mise en ligne officielle.
          </p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>
            L'application est prête à être déployée sur une infrastructure moderne telle que Vercel.
            Les mentions complètes de l'hébergeur seront à reporter dans cette section au moment du
            déploiement.
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les textes, visuels, marques, logos et éléments graphiques liés à Bleu Marée sont
            protégés par le droit de la propriété intellectuelle. Toute reproduction non autorisée
            reste interdite.
          </p>
        </section>
      </div>
    </section>
  );
}
