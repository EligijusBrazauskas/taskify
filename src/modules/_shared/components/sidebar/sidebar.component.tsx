import { PanelRightOpen } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  SideBarNavigation,
  SideBarNavigationCollapsed,
  SideBarTrigger,
  SideBarUserButton,
} from "@/modules/_shared/components/sidebar";
import {
  pinnedProjects,
  sidebarNavigationItems,
} from "@/modules/_shared/components/sidebar/defaults";
import { useBreakpoint } from "@/modules/_shared/hooks";
import { useProjectsSuspenseQuery } from "@/modules/projects/api/queries";

export const SideBar = () => {
  const {
    data: { data: projects },
  } = useProjectsSuspenseQuery();
  const [isMd] = useBreakpoint(["md"]);
  const { state, setOpenMobile } = useSidebar();
  const isSidebarExpanded = state === "expanded";
  const isMediumOrExpanded = isMd || (!isMd && isSidebarExpanded);

  return (
    <Sidebar collapsible="icon" className="border-none">
      <SidebarHeader>
        <SideBarUserButton />
        {isMd && (
          <SideBarTrigger>
            <PanelRightOpen size={20} />
          </SideBarTrigger>
        )}
      </SidebarHeader>
      <SidebarContent>
        {isMediumOrExpanded ? (
          <SideBarNavigation
            label="MAIN MENU"
            items={sidebarNavigationItems}
            onClick={() => setOpenMobile(false)}
          />
        ) : (
          <SideBarNavigationCollapsed items={sidebarNavigationItems} />
        )}
        {isMediumOrExpanded && (
          <SideBarNavigation
            label="PINNED PROJECTS"
            items={pinnedProjects(projects)}
            onClick={() => setOpenMobile(false)}
          />
        )}
      </SidebarContent>
    </Sidebar>
  );
};
