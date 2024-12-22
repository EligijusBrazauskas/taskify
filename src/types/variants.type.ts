export type PartialVariantsProperty<
  T extends Record<string | "variant", string | number | symbol | null>,
  K extends keyof T = "variant",
> = Partial<Record<NonNullable<T[K]>, string>>;
