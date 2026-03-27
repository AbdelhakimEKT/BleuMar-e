import type { Metadata, Viewport } from "next";

import { AppShell } from "@/components/layout/app-shell";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/content/site";
import { getSiteSettingsData } from "@/sanity/loaders";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | ${siteConfig.location}`,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "restaurant gastronomique Biarritz",
    "restaurant premium fruits de mer",
    "restaurant français contemporain Biarritz",
    "Bleu Marée"
  ],
  icons: {
    icon: "/branding/bleu-maree-logo-mark.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#071823"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const [frSettings, enSettings] = await Promise.all([
    getSiteSettingsData("fr"),
    getSiteSettingsData("en")
  ]);
  const settingsByLocale = {
    fr: frSettings,
    en: enSettings
  } as const;

  return (
    <html lang="fr">
      <body>
        <AppShell
          header={<SiteHeader settingsByLocale={settingsByLocale} />}
          footer={<SiteFooter settingsByLocale={settingsByLocale} />}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
