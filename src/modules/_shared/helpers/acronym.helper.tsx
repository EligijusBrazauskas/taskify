export const acronym = (strings: (string | undefined | null)[]): string =>
  strings
    .filter(Boolean)
    .map((string) => string?.charAt(0))
    .join("");
