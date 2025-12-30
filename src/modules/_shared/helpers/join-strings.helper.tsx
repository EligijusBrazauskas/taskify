interface Options {
  separator?: string;
}

export const joinStrings = (
  strings: (string | undefined | null)[],
  options?: Options,
) => strings.filter(Boolean).join(options?.separator ?? " ");
