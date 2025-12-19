import { FolderOpen, PanelRightOpen, PinOff, Plus } from "lucide-react";
import {
  SideBarNavigation,
  SideBarNavigationCollapsed,
  SideBarTrigger,
  SideBarUserButton,
} from "@/components/composite/sidebar";
import { sidebarNavigationDefaults } from "@/components/composite/sidebar/defaults";
import { MenuGroup } from "@/components/composite/sidebar/interfaces";
import { MenuLink } from "@/components/composite/sidebar/interfaces/sidebar-navigation.interface";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { useBreakpoint } from "@/hooks";
import { mockPinnedProjectsData } from "@/mocks";

export const SideBar = () => {
  const [isMd] = useBreakpoint(["md"]);
  const { state, setOpenMobile } = useSidebar();
  const isSidebarExpanded = state === "expanded";
  const isMediumOrExpanded = isMd || (!isMd && isSidebarExpanded);

  const pinnedProjectsGroup: MenuGroup[] = [
    {
      label: "PINNED PROJECTS",
      children: [
        ...mockPinnedProjectsData.data.map(
          (item) =>
            ({
              ...item,
              type: "link",
              to: {
                to: "/projects/$projectId",
                params: { projectId: String(item.id) },
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
      ],
    },
  ];

  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarHeader>
        <SideBarUserButton />
        {isMd && (
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
            <SideBarNavigation
              key={index}
              group={group}
              onClick={() => setOpenMobile(false)}
            />
          ))}
      </SidebarContent>
    </Sidebar>
  );
};
