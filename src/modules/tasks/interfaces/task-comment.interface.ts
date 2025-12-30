import { User } from "@/modules/_shared/interfaces/user.interface";

export interface TaskCommentReactions {
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
  reactions?: TaskCommentReactions[];
}
