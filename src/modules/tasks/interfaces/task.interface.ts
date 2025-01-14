import { Priority } from "@/interfaces";
import { Type } from "@/modules/tasks/interfaces";

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
