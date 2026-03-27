const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string) {
  return emailPattern.test(value);
}

export function isValidDate(value: string) {
  if (!value) {
    return false;
  }

  const parsed = new Date(value);

  return Number.isFinite(parsed.getTime());
}

export function normalizeString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}
