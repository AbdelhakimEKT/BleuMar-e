import { NextResponse } from "next/server";

import { isValidEmail } from "@/lib/validation";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string | undefined>;

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { message: "Merci de renseigner votre nom, votre email, le sujet et le message." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "L'adresse email indiquée semble invalide." }, { status: 400 });
  }

  console.info("Bleu Maree contact request", {
    name,
    email,
    subject,
    phone,
    message
  });

  return NextResponse.json({
    message: "Merci, votre message a bien été transmis à l'équipe Bleu Marée."
  });
}
