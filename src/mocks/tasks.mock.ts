import { Task } from "@/modules/tasks/interfaces";

export const tasks: Task[] = [
  {
    id: 1,
    projectId: 1,
    statusId: 1,
    assigneeId: 1,
    title: "Task 1",
    description: "Description 1",
    createDate: new Date(),
    dueDate: new Date(),
    type: "feature",
    priority: "medium",
  },
  {
    id: 2,
    projectId: 2,
    statusId: 2,
    title: "Task 2",
    description: "Description 2",
    createDate: new Date(),
    dueDate: new Date(),
    type: "bug",
    priority: "high",
  },
  {
    id: 3,
    projectId: 3,
    statusId: 2,
    title:
      "Long task dsaskj lkasd jkbasf jkbndfas jbkfsa Long task dsaskj lkasd jkbasf jkbndfas jbkfsa ",
    description:
      "Longd desc jbkdsabjk lknfask nllkfsan Longd desc jbkdsabjk lknfask nllkfsan Longd desc jbkdsabjk lknfask nllkfsan Longd desc jbkdsabjk lknfask nllkfsan",
    createDate: new Date(),
    dueDate: new Date(),
    type: "bug",
    priority: "high",
  },
  {
    id: 4,
    projectId: 1,
    statusId: 3,
    title: "Fix some bugs",
    createDate: new Date(),
    dueDate: new Date(),
    type: "improvement",
    priority: "low",
  },
];
