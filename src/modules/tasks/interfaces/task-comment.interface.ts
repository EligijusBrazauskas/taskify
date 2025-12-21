export interface TaskComment {
  id: string;
  ownerId: string;
  taskId: string;
  content: string;
  createDate: Date;
  updateDate?: Date;
}
