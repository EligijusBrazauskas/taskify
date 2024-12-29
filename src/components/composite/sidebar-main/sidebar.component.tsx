import {
  NavigationMenu,
  NavigationUserButton,
} from "@/components/composite/shared/components";
import { navigationMenuDefaults } from "@/components/composite/shared/defaults";
import { MenuGroup } from "@/components/composite/shared/interfaces";
import { mockPinnedProjectsData } from "@/components/composite/shared/mocks";
import { NavigationMenuCollapsed } from "@/components/composite/sidebar-main/components/navigation-menu-collapsed.component";
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import { Sidebar } from "@/components/ui/sidebar";
import { FolderOpen, PinOff } from "lucide-react";

export const SidebarMain = () => {
  const { state } = useSidebar();
  const isSidebarExpanded = state === "expanded";

  const pinnedProjectsGroup: MenuGroup[] = [
    {
      label: "PINNED PROJECTS",
      children: mockPinnedProjectsData.data.map((item) => ({
        ...item,
        path: `projects/${item.id}`,
        icon: <FolderOpen />,
        action: {
          icon: <PinOff />,
          onClick: () => console.log("unpin"),
        },
      })),
    },
  ];

  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarHeader>
        <SidebarMenu>
          <NavigationUserButton isSidebarExpanded={isSidebarExpanded} />
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* <ScrollArea> */}
        {/* <Flex className="flex-col gap-2 overflow-auto py-2"> */}
        {navigationMenuDefaults.map((group, index) =>
          isSidebarExpanded ? (
            <NavigationMenu key={index} group={group} />
          ) : (
            <NavigationMenuCollapsed key={index} group={group} />
          ),
        )}
        {isSidebarExpanded &&
          pinnedProjectsGroup.map((group, index) => (
            <NavigationMenu key={index} group={group} />
          ))}
        {/* </Flex> */}
        {/* </ScrollArea> */}
      </SidebarContent>
    </Sidebar>
  );
};
