import { Status } from "@/modules/_shared/interfaces";

export const taskStatuses: Status[] = [
  {
    id: 1,
    label: "To-do",
    order: 1,
    color: "secondary",
  },
  {
    id: 2,
    label: "In Progress",
    order: 2,
    color: "blue",
  },
  {
    id: 3,
    label: "Done",
    order: 3,
    color: "green",
  },
];

export const projectStatuses: Status[] = [
  {
    id: 1,
    label: "To-do",
    order: 1,
    color: "secondary",
  },
  {
    id: 2,
    label: "In Progress",
    order: 2,
    color: "blue",
  },
  {
    id: 3,
    label: "Cancelled",
    order: 3,
    color: "red",
  },
];
