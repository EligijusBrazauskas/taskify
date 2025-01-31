import { Priority } from "@/interfaces/priority.type";

export interface Project {
  id: number;
  ownerId: number;
  statusId: number;
  title: string;
  favorite: boolean;
  pinned: boolean;
  createDate: Date;
  assigneeIds?: number[];
  description?: string;
  priority?: Priority;
  dueDate?: Date;
  endDate?: Date;
}
