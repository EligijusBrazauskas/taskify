export type Priority = "lowest" | "low" | "medium" | "high" | "highest";

export type Type =
  | "feature"
  | "bug"
  | "task"
  | "improvement"
  | "epic"
  | "story"
  | "sub-task"
  | "spike"
  | "chore"
  | "incident";

export interface Task {
  id: number;
  statusId: number;
  title: string;
  createDate: Date;
  description?: string;
  assigneeId?: number;
  dueDate?: Date;
  priority?: Priority;
  type?: Type;
  tags?: string[];
}
