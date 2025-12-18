import { Priority } from "@/modules/_shared/types";
import { TaskType } from "@/modules/tasks/interfaces/type.type";

export interface Task {
  id: number;
  projectId: number;
  statusId: number;
  title: string;
  createDate: Date;
  description?: string;
  assigneeId?: number;
  dueDate?: Date;
  priority?: Priority;
  type?: TaskType;
}
