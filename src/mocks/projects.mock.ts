import { Project } from "@/modules/projects/interfaces";

export const projects: Project[] = [
  {
    id: 1,
    ownerId: 1,
    statusId: 1,
    title: "Project 1",
    description: "This is my project",
    createDate: new Date(),
    dueDate: new Date(),
    priority: "medium",
    favorite: false,
    pinned: true,
  },
  {
    id: 2,
    ownerId: 1,
    statusId: 2,
    title: "Project 2",
    createDate: new Date(),
    dueDate: new Date(),
    priority: "low",
    favorite: true,
    pinned: false,
  },
];
