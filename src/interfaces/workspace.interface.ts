import { StatusColor } from "@/modules/projects/interfaces/status.interface";

export type Workspace = {
  id: number;
  label: string;
  color?: StatusColor;
};
