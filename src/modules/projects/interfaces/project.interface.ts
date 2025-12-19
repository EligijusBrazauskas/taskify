import { Priority } from "@/modules/_shared/types/priority.type";

export interface Project {
  id: number;
  ownerId: number;
  statusId: number;
  title: string;
  favorite: boolean;
  pinned: boolean;
  createDate: Date;
  pinnedByUserId?: string;
  assigneeIds?: number[];
  description?: string;
  priority?: Priority;
  dueDate?: Date;
  endDate?: Date;
}
