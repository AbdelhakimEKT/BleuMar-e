"use client";

import type { FormEvent } from "react";
import { useState, useTransition } from "react";

import type { Locale } from "@/i18n/config";
import { getUiCopy } from "@/i18n/ui";

import styles from "./forms.module.css";

type Status = {
  tone: "success" | "error";
  message: string;
} | null;

type ContactFormProps = {
  locale: Locale;
};

export function ContactForm({ locale }: ContactFormProps) {
  const copy = getUiCopy(locale).contactForm;
  const messages = getUiCopy(locale).contactApi;
  const [status, setStatus] = useState<Status>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus(null);

    startTransition(() => {
      void (async () => {
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });

          const data = (await response.json()) as { message: string };

          if (!response.ok) {
            setStatus({ tone: "error", message: data.message });
            return;
          }

          form.reset();
          setStatus({ tone: "success", message: data.message });
        } catch {
          setStatus({ tone: "error", message: messages.sendFailed });
        }
      })();
    });
  };

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>{copy.title}</h2>
      <p className={styles.copy}>{copy.intro}</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="hidden" name="locale" value={locale} />

        <div className={styles.gridTwo}>
          <label className={styles.field}>
            <span className={styles.label}>{copy.name}</span>
            <input className={styles.control} type="text" name="name" required />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{copy.email}</span>
            <input className={styles.control} type="email" name="email" required />
          </label>
        </div>

        <label className={styles.field}>
          <span className={styles.label}>{copy.phone}</span>
          <input className={styles.control} type="tel" name="phone" />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>{copy.subject}</span>
          <input className={styles.control} type="text" name="subject" required />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>{copy.message}</span>
          <textarea className={styles.textarea} name="message" required />
        </label>

        <p className={styles.hint}>{copy.hint}</p>

        {status ? (
          <p className={`${styles.status} ${status.tone === "success" ? styles.success : styles.error}`}>
            {status.message}
          </p>
        ) : null}

        <button type="submit" className={`button ${styles.submit}`} disabled={isPending}>
          {isPending ? copy.submitting : copy.submit}
        </button>
      </form>
    </div>
  );
}
