export type StatusColor =
  | "secondary"
  | "blue"
  | "red"
  | "orange"
  | "yellow"
  | "green";

export interface ProjectStatus {
  id: number;
  workspaceId: number;
  label: string;
  color: StatusColor;
}

export interface TaskStatus extends Omit<ProjectStatus, "workspaceId"> {
  projectId: number;
}
