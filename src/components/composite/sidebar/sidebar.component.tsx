import { mockPinnedProjectsData } from "@/components/composite/shared/mocks";
import {
  SideBarNavigation,
  SideBarNavigationCollapsed,
  SideBarTrigger,
  SideBarUserButton,
} from "@/components/composite/sidebar";
import { sidebarNavigationDefaults } from "@/components/composite/sidebar/defaults";
import { MenuGroup } from "@/components/composite/sidebar/interfaces";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { FolderOpen, PanelRightOpen, PinOff, Plus } from "lucide-react";

export const SideBar = () => {
  const isMedium = useBreakpoint();
  const { state, setOpenMobile } = useSidebar();
  const isSidebarExpanded = state === "expanded";
  const isMediumOrExpanded = isMedium || (!isMedium && isSidebarExpanded);

  const pinnedProjectsGroup: MenuGroup[] = [
    {
      label: "PINNED PROJECTS",
      children: [
        ...mockPinnedProjectsData.data.map((item) => ({
          ...item,
          type: "link" as const,
          path: `/projects/${item.id}`,
          icon: <FolderOpen />,
          action: {
            icon: <PinOff />,
            onClick: () => console.log("unpin"),
          },
        })),
        {
          id: "new-project",
          type: "button",
          label: "New Project",
          icon: <Plus />,
          onClick: () => console.log("add new project"),
        },
      ],
    },
  ];

  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarHeader>
        <SideBarUserButton />
        {isMedium && (
          <SideBarTrigger>
            <PanelRightOpen />
          </SideBarTrigger>
        )}
      </SidebarHeader>
      <SidebarContent>
        {sidebarNavigationDefaults.map((group, index) =>
          isMediumOrExpanded ? (
            <SideBarNavigation
              key={index}
              group={group}
              onClick={() => setOpenMobile(false)}
            />
          ) : (
            <SideBarNavigationCollapsed key={index} group={group} />
          ),
        )}
        {isMediumOrExpanded &&
          pinnedProjectsGroup.map((group, index) => (
            <SideBarNavigation key={index} group={group} />
          ))}
      </SidebarContent>
    </Sidebar>
  );
};
