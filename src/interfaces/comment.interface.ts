export interface BaseComment {
  id: number;
  ownerId: number;
  content: string;
  createDate: Date;
  updateDate?: Date;
}
