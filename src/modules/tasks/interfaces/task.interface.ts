import { Priority } from "@/modules/_shared/types";
import { TaskType } from "@/modules/tasks/interfaces/type.type";

export interface Task {
  id: string;
  projectId: string;
  statusId: string;
  title: string;
  createDate: Date;
  description?: string;
  assigneeId?: string;
  dueDate?: Date;
  priority?: Priority;
  type?: TaskType;
}
