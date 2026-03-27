import type { MetadataRoute } from "next";

import { footerLinks, navigation, siteConfig } from "@/content/site";
import { locales } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  const uniqueRoutes = Array.from(new Set([...navigation, ...footerLinks].map((item) => item.href)));
  const routes = locales.flatMap((locale) =>
    uniqueRoutes.map((href) => ({
      url: new URL(withLocale(locale, href), siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: href === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: href === "/" ? 1 : 0.7
    }))
  );

  return routes;
}
