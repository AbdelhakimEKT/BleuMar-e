import Link from "next/link";

import type { SiteSettingsData } from "@/sanity/loaders";

type ZenchefReservationPanelProps = {
  settings: SiteSettingsData;
};

export function ZenchefReservationPanel({ settings }: ZenchefReservationPanelProps) {
  const hasBookingLink = settings.bookingLink.length > 0;

  return (
    <div className="surface-card">
      <div className="stack">
        <div>
          <p className="kicker">{settings.bookingProvider}</p>
          <h2 className="section-title" style={{ fontSize: "2.3rem" }}>
            Réservation V1 via le module officiel.
          </h2>
          <p className="microcopy">
            Le site est prêt à déclencher le widget ou le Booking Link Zenchef. Dès que vous nous
            transmettez l'accès ou le lien officiel, ce bloc devient le point d'entrée principal
            pour choisir la date, l'heure et le nombre de couverts.
          </p>
        </div>

        <div className="notice-panel">
          <strong>Ce que Zenchef prendra en charge</strong>
          <br />
          Nombre de couverts, disponibilités, créneaux, fermetures exceptionnelles, confirmations
          email et ajustements côté restaurant.
        </div>

        {hasBookingLink ? (
          <Link href={settings.bookingLink} className="button">
            Réserver avec {settings.bookingProvider}
          </Link>
        ) : (
          <div className="stack">
            <div className="surface-card">
              <p className="kicker">Intégration en attente</p>
              <p className="microcopy">{settings.bookingNote}</p>
            </div>
            <Link href="/contact" className="button-secondary">
              Nous transmettre le lien {settings.bookingProvider}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
