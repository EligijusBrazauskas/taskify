import { User } from "@/modules/_shared/interfaces/user.interface";

export interface TaskCommentReaction {
  id: string;
  commentId: string;
  userId: string;
  reaction: string;
  count: number;
}

export interface TaskComment {
  id: string;
  authorId: string;
  taskId: string;
  description: string;
  postedAt: Date;
  updatedAt?: Date;
  author?: User;
  reactions?: TaskCommentReaction[];
}
