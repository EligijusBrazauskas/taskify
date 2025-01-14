import { BaseComment } from "@/interfaces";

export interface ProjectComment extends BaseComment {
  projectId: number;
}
