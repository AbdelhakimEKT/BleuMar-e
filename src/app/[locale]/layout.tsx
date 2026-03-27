import type { ReactNode } from "react";

import { generateLocaleParams, resolveLocale } from "@/i18n/server";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return generateLocaleParams();
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  await resolveLocale(params);

  return children;
}
