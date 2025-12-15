export type StatusColor =
  | "secondary"
  | "blue"
  | "red"
  | "orange"
  | "yellow"
  | "green";

export interface Status {
  type: "project" | "task";
  id: number;
  label: string;
  order: number;
  color?: StatusColor;
}
