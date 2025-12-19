import { FolderOpen, PinOff, Plus } from "lucide-react";
import {
  MenuItem,
  MenuLink,
} from "@/modules/_shared/components/sidebar/interfaces/menu-item.interface";
import { Project } from "@/modules/projects/interfaces";

export const pinnedProjects = (projects: Project[]): MenuItem[] => [
  ...projects
    .filter((project) => project.pinned)
    .map(
      (project) =>
        ({
          id: project.id,
          label: project.title,
          type: "link",
          to: {
            to: "/projects/$projectId",
            params: { projectId: String(project.id) },
          },
          icon: <FolderOpen />,
          action: {
            icon: <PinOff />,
            onClick: () => console.log("unpin"),
          },
        }) satisfies MenuLink,
    ),
  {
    id: "new-project",
    type: "button",
    label: "New Project",
    icon: <Plus />,
    onClick: () => console.log("add new project"),
  },
];
