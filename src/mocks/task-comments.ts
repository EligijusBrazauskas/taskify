import { TaskComment } from "@/modules/tasks/interfaces";

export const taskComments: TaskComment[] = [
  {
    id: "1",
    ownerId: "1",
    taskId: "1",
    description: "comment",
    createDate: new Date(),
  },
  {
    id: "2",
    ownerId: "1",
    taskId: "1",
    description: "comment 2",
    createDate: new Date(),
  },
  {
    id: "3",
    ownerId: "1",
    taskId: "2",
    description: "comment 3",
    createDate: new Date(),
  },
];
