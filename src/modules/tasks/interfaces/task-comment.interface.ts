export interface TaskComment {
  id: string;
  ownerId: string;
  taskId: string;
  description: string;
  createDate: Date;
  updateDate?: Date;
}
