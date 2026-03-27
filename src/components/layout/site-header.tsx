import { getSiteSettingsData } from "@/sanity/loaders";

import { SiteHeaderClient } from "./site-header.client";

export async function SiteHeader() {
  const settings = await getSiteSettingsData();

  return <SiteHeaderClient name={settings.name} location={settings.location} />;
}
