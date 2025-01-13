import { ProjectStatus } from "@/modules/projects/interfaces";

export const projectStatuses: ProjectStatus[] = [
  {
    id: 1,
    workspaceId: 1,
    label: "To-do",
    color: "secondary",
  },
  {
    id: 2,
    workspaceId: 1,
    label: "In Progress",
    color: "blue",
  },
  {
    id: 3,
    workspaceId: 1,
    label: "Done",
    color: "green",
  },
];
