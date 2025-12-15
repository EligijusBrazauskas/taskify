export interface TaskComment {
  id: number;
  ownerId: number;
  taskId: number;
  content: string;
  createDate: Date;
  updateDate?: Date;
}
