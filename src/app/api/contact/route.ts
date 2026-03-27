import { NextResponse } from "next/server";

import { isLocale } from "@/i18n/config";
import { getUiCopy } from "@/i18n/ui";
import { isValidEmail } from "@/lib/validation";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string | undefined>;
  const requestedLocale = body.locale ?? "";
  const locale = isLocale(requestedLocale) ? requestedLocale : "fr";
  const messages = getUiCopy(locale).contactApi;

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: messages.missingFields }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: messages.invalidEmail }, { status: 400 });
  }

  console.info("Bleu Maree contact request", {
    name,
    email,
    subject,
    phone,
    message
  });

  return NextResponse.json({
    message: messages.success
  });
}
