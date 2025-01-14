import { Priority } from "@/interfaces/priority.type";
import { BaseStatus } from "@/interfaces/status.interface";

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
  status?: BaseStatus;
  endDate?: Date;
}
