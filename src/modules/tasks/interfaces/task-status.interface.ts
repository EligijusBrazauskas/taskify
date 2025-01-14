import { BaseStatus } from "@/interfaces";

export interface TaskStatus extends BaseStatus {
  projectId: number;
}
