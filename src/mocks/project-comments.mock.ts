import { ProjectComment } from "@/modules/projects/interfaces";

export const projectComments: ProjectComment[] = [
  {
    id: 1,
    ownerId: 1,
    projectId: 1,
    content: "comment",
    createDate: new Date(),
  },
  {
    id: 2,
    ownerId: 1,
    projectId: 1,
    content: "comment 2",
    createDate: new Date(),
  },
];
