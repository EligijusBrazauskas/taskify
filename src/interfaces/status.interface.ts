export type StatusColor =
  | "secondary"
  | "blue"
  | "red"
  | "orange"
  | "yellow"
  | "green";

export interface BaseStatus {
  id: number;
  label: string;
  color: StatusColor;
}
