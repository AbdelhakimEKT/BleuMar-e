import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container split-layout">
        <div className="stack">
          <div className="eyebrow">Page introuvable</div>
          <h1 className="page-title">Cette adresse ne mène plus à la bonne table.</h1>
          <p className="lead">
            La page demandée n'existe pas ou a changé de place. Vous pouvez revenir à l'accueil,
            consulter les menus ou ouvrir directement la réservation.
          </p>
          <div className="cta-row">
            <Link href="/" className="button">
              Retour à l'accueil
            </Link>
            <Link href="/reservation" className="button-secondary">
              Réserver
            </Link>
          </div>
        </div>

        <div className="surface-card">
          <p className="kicker">Bleu Marée</p>
          <p className="microcopy">
            Revenez à l'accueil, explorez la carte ou ouvrez directement la réservation pour
            retrouver la bonne adresse.
          </p>
        </div>
      </div>
    </section>
  );
}
