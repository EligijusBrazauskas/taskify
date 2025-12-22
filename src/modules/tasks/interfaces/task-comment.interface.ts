import { User } from "@/modules/_shared/interfaces";

export interface TaskComment {
  id: string;
  authorId: string;
  taskId: string;
  description: string;
  createDate: Date;
  updateDate?: Date;
  author?: User;
}
