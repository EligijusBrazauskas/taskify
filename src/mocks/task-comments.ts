import { TaskComment } from "@/modules/projects/interfaces";

export const taskComments: TaskComment[] = [
  {
    id: 1,
    ownerId: 1,
    taskId: 1,
    content: "comment",
    createDate: new Date(),
  },
  {
    id: 2,
    ownerId: 1,
    taskId: 1,
    content: "comment 2",
    createDate: new Date(),
  },
];
