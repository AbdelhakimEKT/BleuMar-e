import nodemailer from "nodemailer";

import { getSiteConfig } from "@/content/site";
import type { Locale } from "@/i18n/config";

type ContactEmailPayload = {
  locale: Locale;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

const defaultSiteConfig = getSiteConfig("fr");

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getContactEmailConfig() {
  const user = process.env.CONTACT_SMTP_USER ?? defaultSiteConfig.email;
  const pass = process.env.CONTACT_SMTP_PASS ?? "";
  const host = process.env.CONTACT_SMTP_HOST ?? "";
  const port = Number(process.env.CONTACT_SMTP_PORT ?? (host ? "587" : "465"));
  const secure = process.env.CONTACT_SMTP_SECURE
    ? process.env.CONTACT_SMTP_SECURE === "true"
    : port === 465;
  const service =
    process.env.CONTACT_SMTP_SERVICE ??
    (!host && user.toLowerCase().endsWith("@gmail.com") ? "gmail" : undefined);

  return {
    toEmail: process.env.CONTACT_TO_EMAIL ?? defaultSiteConfig.email,
    fromEmail: process.env.CONTACT_FROM_EMAIL ?? user,
    user,
    pass,
    host,
    port,
    secure,
    service
  };
}

export function isContactEmailConfigured() {
  const config = getContactEmailConfig();
  return Boolean(config.user && config.pass && (config.service || config.host));
}

function createTransport() {
  const config = getContactEmailConfig();

  if (config.service) {
    return nodemailer.createTransport({
      service: config.service,
      auth: {
        user: config.user,
        pass: config.pass
      }
    });
  }

  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass
    }
  });
}

export async function sendContactEmail({
  locale,
  name,
  email,
  phone,
  subject,
  message
}: ContactEmailPayload) {
  const config = getContactEmailConfig();
  const transporter = createTransport();
  const localeLabel = locale === "fr" ? "FR" : "EN";
  const submittedAt = new Intl.DateTimeFormat(locale === "fr" ? "fr-FR" : "en-GB", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Paris"
  }).format(new Date());

  await transporter.sendMail({
    to: config.toEmail,
    from: `"Bleu Marée" <${config.fromEmail}>`,
    replyTo: email,
    subject: `[Bleu Marée] ${subject}`,
    text: [
      `Nouveau message depuis le site Bleu Marée (${localeLabel})`,
      ``,
      `Nom: ${name}`,
      `Email: ${email}`,
      `Téléphone: ${phone || "Non renseigné"}`,
      `Sujet: ${subject}`,
      `Envoyé le: ${submittedAt}`,
      ``,
      message
    ].join("\n"),
    html: `
      <div style="font-family: Helvetica, Arial, sans-serif; background:#05121c; color:#f5efe4; padding:32px;">
        <div style="max-width:680px; margin:0 auto; background:#102738; border:1px solid rgba(247,226,189,0.18); border-radius:24px; overflow:hidden;">
          <div style="padding:28px 32px; border-bottom:1px solid rgba(247,226,189,0.14);">
            <div style="font-size:12px; letter-spacing:0.28em; text-transform:uppercase; color:#c9a56a;">Bleu Marée · Contact</div>
            <h1 style="margin:14px 0 0; font-family: Georgia, 'Times New Roman', serif; font-size:40px; line-height:1; font-weight:700; color:#f5efe4;">${escapeHtml(subject)}</h1>
          </div>
          <div style="padding:28px 32px;">
            <div style="display:grid; gap:10px; margin-bottom:24px;">
              <div><strong style="color:#f7e2bd;">Nom</strong><br />${escapeHtml(name)}</div>
              <div><strong style="color:#f7e2bd;">Email</strong><br />${escapeHtml(email)}</div>
              <div><strong style="color:#f7e2bd;">Téléphone</strong><br />${escapeHtml(phone || "Non renseigné")}</div>
              <div><strong style="color:#f7e2bd;">Langue</strong><br />${localeLabel}</div>
              <div><strong style="color:#f7e2bd;">Envoyé le</strong><br />${escapeHtml(submittedAt)}</div>
            </div>
            <div style="padding:22px 24px; border-radius:20px; background:rgba(5,18,28,0.56); border:1px solid rgba(247,226,189,0.12); line-height:1.75; white-space:pre-wrap;">${escapeHtml(message)}</div>
          </div>
        </div>
      </div>
    `
  });
}
