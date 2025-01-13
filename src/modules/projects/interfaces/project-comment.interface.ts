export interface ProjectComment {
  id: number;
  ownerId: number;
  projectId: number;
  content: string;
  createDate: Date;
  updateDate?: Date;
}
