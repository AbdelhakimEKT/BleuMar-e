import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et gestion minimale RGPD du site Bleu Marée."
});

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="section section-surface--light section--light">
      <div className="container legal-copy">
        <div>
          <p className="eyebrow">Confidentialité</p>
          <h1 className="page-title">Protection des données personnelles.</h1>
        </div>

        <section>
          <h2>Données collectées</h2>
          <p>
            Les formulaires de contact et de réservation peuvent collecter les données strictement
            nécessaires au traitement de la demande: identité, coordonnées, date souhaitée, nombre
            de couverts et remarques éventuelles.
          </p>
        </section>

        <section>
          <h2>Finalité</h2>
          <p>
            Ces informations servent à répondre aux demandes, organiser les réservations et assurer
            la qualité de l'expérience client. Elles ne doivent pas être utilisées à d'autres fins
            sans information préalable de l'utilisateur.
          </p>
        </section>

        <section>
          <h2>Conservation et droits</h2>
          <p>
            La durée de conservation et le contact RGPD définitif seront à préciser lors du
            branchement du back-office et des outils d'email. L'utilisateur pourra exercer ses
            droits d'accès, de rectification et de suppression selon la réglementation en vigueur.
          </p>
        </section>

        <section>
          <h2>Cookies et mesure d'audience</h2>
          <p>
            Si un outil analytics est ajouté au site, une bannière et une politique cookies devront
            compléter ce document pour rester cohérents avec les obligations applicables.
          </p>
        </section>
      </div>
    </section>
  );
}
