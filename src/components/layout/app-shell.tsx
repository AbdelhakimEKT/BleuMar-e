"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { SignatureCursor } from "@/components/home/signature-cursor";
import { getLocaleFromPathname } from "@/i18n/routing";
import { getUiCopy } from "@/i18n/ui";

import { BrandIntro } from "./brand-intro";

type AppShellProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

export function AppShell({ children, header, footer }: AppShellProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const ui = getUiCopy(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  if (pathname.startsWith("/studio")) {
    return <>{children}</>;
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        {ui.skipToContent}
      </a>
      <BrandIntro />
      <SignatureCursor />
      <div className="site-shell">
        {header}
        <main id="main-content" key={pathname} className="page-stage">
          {children}
        </main>
        {footer}
      </div>
    </>
  );
}
