import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";
import { getUiCopy } from "@/i18n/ui";
import type { SiteSettingsData } from "@/sanity/loaders";

type ZenchefReservationPanelProps = {
  settings: SiteSettingsData;
  locale: Locale;
};

export function ZenchefReservationPanel({ settings, locale }: ZenchefReservationPanelProps) {
  const hasBookingLink = settings.bookingLink.length > 0;
  const copy = getUiCopy(locale).zenchef;

  return (
    <div className="surface-card">
      <div className="stack">
        <div>
          <p className="kicker">{settings.bookingProvider}</p>
          <h2 className="section-title" style={{ fontSize: "2.3rem" }}>
            {copy.title}
          </h2>
          <p className="microcopy">{copy.intro}</p>
        </div>

        <div className="notice-panel">
          <strong>{copy.noticeTitle}</strong>
          <br />
          {copy.noticeCopy}
        </div>

        {hasBookingLink ? (
          <Link href={settings.bookingLink} className="button">
            {copy.bookWithProvider.replace("{provider}", settings.bookingProvider)}
          </Link>
        ) : (
          <div className="stack">
            <div className="surface-card">
              <p className="kicker">{copy.pendingTitle}</p>
              <p className="microcopy">{settings.bookingNote}</p>
            </div>
            <Link href={withLocale(locale, "/contact")} className="button-secondary">
              {copy.shareLink.replace("{provider}", settings.bookingProvider)}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
