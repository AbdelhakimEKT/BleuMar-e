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

type ReservationRequestFormProps = {
  locale: Locale;
  storageReady: boolean;
};

const coverOptions = Array.from({ length: 12 }, (_, index) => index + 1);
const serviceTimes = ["12:00", "12:30", "13:00", "13:30", "19:30", "20:00", "20:30", "21:00", "21:30"];

export function ReservationRequestForm({
  locale,
  storageReady
}: ReservationRequestFormProps) {
  const copy = getUiCopy(locale).reservationForm;
  const [status, setStatus] = useState<Status>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus(null);

    startTransition(() => {
      void (async () => {
        const response = await fetch("/api/reservations", {
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
      })();
    });
  };

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>{copy.title}</h2>
      <p className={styles.copy}>{copy.intro}</p>

      {!storageReady ? <p className={styles.hint}>{copy.storagePending}</p> : null}

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

        <div className={styles.gridTwo}>
          <label className={styles.field}>
            <span className={styles.label}>{copy.phone}</span>
            <input className={styles.control} type="tel" name="phone" required />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{copy.covers}</span>
            <select className={styles.select} name="covers" defaultValue="" required>
              <option value="" disabled>
                {copy.occasionOptions.default}
              </option>
              {coverOptions.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.gridTwo}>
          <label className={styles.field}>
            <span className={styles.label}>{copy.date}</span>
            <input
              className={styles.control}
              type="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{copy.time}</span>
            <select className={styles.select} name="time" defaultValue="" required>
              <option value="" disabled>
                {copy.occasionOptions.default}
              </option>
              {serviceTimes.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className={styles.field}>
          <span className={styles.label}>{copy.occasion}</span>
          <select className={styles.select} name="occasion" defaultValue="">
            <option value="">{copy.occasionOptions.default}</option>
            <option value="dinner">{copy.occasionOptions.dinner}</option>
            <option value="anniversary">{copy.occasionOptions.anniversary}</option>
            <option value="business">{copy.occasionOptions.business}</option>
            <option value="celebration">{copy.occasionOptions.celebration}</option>
            <option value="private">{copy.occasionOptions.private}</option>
          </select>
        </label>

        <label className={styles.field}>
          <span className={styles.label}>{copy.notes}</span>
          <textarea className={styles.textarea} name="notes" />
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
