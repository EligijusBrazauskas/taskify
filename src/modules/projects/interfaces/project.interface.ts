import { User } from "@/modules/_shared/interfaces";
import { Priority } from "@/modules/_shared/types/priority.type";

export interface Project {
  id: string;
  ownerId: string;
  statusId: string;
  title: string;
  favorite: boolean;
  pinned: boolean;
  createDate: Date;
  pinnedByUserId?: string;
  assigneeIds?: string[];
  description?: string;
  priority?: Priority;
  dueDate?: Date;
  endDate?: Date;
  owner?: User;
}
