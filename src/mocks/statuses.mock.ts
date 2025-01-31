import { Status } from "@/interfaces";

export const statuses: Status[] = [
  {
    id: 1,
    label: "To-do",
    order: 1,
    type: "task",
    color: "secondary",
  },
  {
    id: 2,
    label: "In Progress",
    order: 2,
    type: "task",
    color: "blue",
  },
  {
    id: 3,
    label: "Done",
    order: 3,
    type: "task",
    color: "green",
  },
  {
    id: 4,
    label: "To-do",
    order: 1,
    type: "project",
    color: "secondary",
  },
  {
    id: 5,
    label: "In Progress",
    order: 2,
    type: "project",
    color: "blue",
  },
  {
    id: 6,
    label: "Cancelled",
    order: 3,
    type: "project",
    color: "red",
  },
];
