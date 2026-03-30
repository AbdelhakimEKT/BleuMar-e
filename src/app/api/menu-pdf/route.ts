import { NextResponse } from "next/server";

import { isLocale } from "@/i18n/config";
import { createMenuPdfBuffer } from "@/lib/menu-pdf";
import { getMenusPageData, getSiteSettingsData } from "@/sanity/loaders";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const requestedLocale = searchParams.get("locale") ?? "";
  const locale = isLocale(requestedLocale) ? requestedLocale : "fr";

  const [siteConfig, menusPageData] = await Promise.all([
    getSiteSettingsData(locale),
    getMenusPageData(locale)
  ]);

  const pdf = await createMenuPdfBuffer({
    locale,
    siteConfig,
    menusPageData
  });

  return new NextResponse(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="bleu-maree-menu-${locale}.pdf"`,
      "Cache-Control": "no-store"
    }
  });
}
