export type StatusColor =
  | "secondary"
  | "blue"
  | "red"
  | "orange"
  | "yellow"
  | "green";

export interface Status {
  id: string;
  label: string;
  order: number;
  color?: StatusColor;
}
