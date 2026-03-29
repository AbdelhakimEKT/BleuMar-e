import { NextResponse } from "next/server";

import { isLocale } from "@/i18n/config";
import { getUiCopy } from "@/i18n/ui";
import { isValidEmail } from "@/lib/validation";
import { isSanityWriteConfigured } from "@/sanity/env";
import { safeSanityCreate } from "@/sanity/lib/client";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string | undefined>;
  const requestedLocale = body.locale ?? "";
  const locale = isLocale(requestedLocale) ? requestedLocale : "fr";
  const messages = getUiCopy(locale).reservationApi;

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const coversRaw = body.covers?.trim() ?? "";
  const date = body.date?.trim() ?? "";
  const time = body.time?.trim() ?? "";
  const occasion = body.occasion?.trim() ?? "";
  const notes = body.notes?.trim() ?? "";

  if (!name || !email || !phone || !coversRaw || !date || !time) {
    return NextResponse.json({ message: messages.missingFields }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: messages.invalidEmail }, { status: 400 });
  }

  const covers = Number(coversRaw);

  if (!Number.isInteger(covers) || covers < 1 || covers > 12) {
    return NextResponse.json({ message: messages.invalidCovers }, { status: 400 });
  }

  if (!isSanityWriteConfigured) {
    return NextResponse.json({ message: messages.storageNotReady }, { status: 503 });
  }

  const created = await safeSanityCreate({
    _type: "reservationRequest",
    submittedAt: new Date().toISOString(),
    status: "new",
    guestName: name,
    email,
    phone,
    covers,
    reservationDate: date,
    reservationTime: time,
    occasion: occasion || undefined,
    notes: notes || undefined,
    locale,
    source: "website"
  });

  if (!created) {
    return NextResponse.json({ message: messages.saveFailed }, { status: 500 });
  }

  return NextResponse.json({
    message: messages.success
  });
}
