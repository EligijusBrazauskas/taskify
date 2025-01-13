import { ProjectStatus } from "@/modules/projects/interfaces";
import { Priority } from "@/modules/projects/interfaces/task.interface";

export interface Project {
  id: number;
  ownerId: number;
  statusId: number;
  title: string;
  favorite: boolean;
  pinned: boolean;
  createDate: Date;
  description?: string;
  priority?: Priority;
  dueDate?: Date;
  status?: ProjectStatus;
  endDate?: Date;
}
