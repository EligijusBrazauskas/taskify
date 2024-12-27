import { navigationMenuDefaults } from "@/components/composite/shared/defaults";
import { mockPinnedProjectsData } from "@/components/composite/shared/mocks";
import { MenuGroup } from "@/components/composite/sidebar/interfaces";
import { FolderOpen } from "lucide-react";

export const navigationMenuConfig = (props: MenuGroup[]) => [
  ...navigationMenuDefaults,
  ...props.map(({ label, key, children }) => ({
    label,
    key,
    children,
  })),
];

export const configItems: MenuGroup[] = [
  {
    label: "PINNED PROJECTS",
    key: "pinnedProjects",
    children: mockPinnedProjectsData.data.map((item) => ({
      ...item,
      path: `pinned-projects/${item.id}`,
      icon: <FolderOpen />,
    })),
  },
];
