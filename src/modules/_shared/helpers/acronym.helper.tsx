export const acronym = (text?: string): string => {
  return text
    ? text
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("")
    : "P";
};
