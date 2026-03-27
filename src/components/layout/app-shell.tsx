"use client";

import { usePathname } from "next/navigation";

import { SignatureCursor } from "@/components/home/signature-cursor";

import { BrandIntro } from "./brand-intro";

type AppShellProps = {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
};

export function AppShell({ children, header, footer }: AppShellProps) {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return <>{children}</>;
  }

  return (
    <>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
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
