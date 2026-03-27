import type { Locale } from "@/i18n/config";
import type { SiteSettingsData } from "@/sanity/loaders";

import { SiteHeaderClient } from "./site-header.client";

type SiteHeaderProps = {
  settingsByLocale: Record<Locale, SiteSettingsData>;
};

export function SiteHeader({ settingsByLocale }: SiteHeaderProps) {
  return <SiteHeaderClient settingsByLocale={settingsByLocale} />;
}
