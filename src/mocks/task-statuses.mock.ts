import { TaskStatus } from "@/modules/projects/interfaces";

export const taskStatuses: TaskStatus[] = [
  {
    id: 1,
    projectId: 1,
    label: "To-do",
    color: "secondary",
  },
  {
    id: 2,
    projectId: 1,
    label: "In Progress",
    color: "blue",
  },
  {
    id: 3,
    projectId: 1,
    label: "In Review",
    color: "red",
  },
  {
    id: 4,
    projectId: 1,
    label: "Ready For QA",
    color: "orange",
  },
  {
    id: 5,
    projectId: 1,
    label: "In QA",
    color: "yellow",
  },
  {
    id: 6,
    projectId: 1,
    label: "Done",
    color: "green",
  },
];
