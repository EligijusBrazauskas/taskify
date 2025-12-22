import { TaskComment } from "@/modules/tasks/interfaces";

export const taskComments: TaskComment[] = [
  {
    id: "1",
    authorId: "1",
    taskId: "1",
    description: "comment",
    createDate: new Date(),
  },
  {
    id: "2",
    authorId: "2",
    taskId: "1",
    description: "comment 2",
    createDate: new Date(),
  },
  {
    id: "3",
    authorId: "3",
    taskId: "2",
    description: "comment 3",
    createDate: new Date(),
  },
];
