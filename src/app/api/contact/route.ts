import { NextResponse } from "next/server";

import { isLocale } from "@/i18n/config";
import { getUiCopy } from "@/i18n/ui";
import { isContactEmailConfigured, sendContactEmail } from "@/lib/contact-email";
import { isValidEmail } from "@/lib/validation";

export const runtime = "nodejs";

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

  if (!isContactEmailConfigured()) {
    return NextResponse.json({ message: messages.deliveryUnavailable }, { status: 503 });
  }

  try {
    await sendContactEmail({
      locale,
      name,
      email,
      subject,
      phone,
      message
    });
  } catch (error) {
    console.error("Bleu Maree contact email failed", error);
    return NextResponse.json({ message: messages.sendFailed }, { status: 500 });
  }

  return NextResponse.json({
    message: messages.success
  });
}
