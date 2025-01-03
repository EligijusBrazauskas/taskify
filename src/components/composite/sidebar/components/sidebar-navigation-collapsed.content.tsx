import { MenuGroup } from "@/components/composite/shared/interfaces";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";

interface SideBarNavigationCollapsedProps {
  group: MenuGroup;
}

export const SideBarNavigationCollapsed = ({
  group,
}: SideBarNavigationCollapsedProps) => (
  <SidebarGroup>
    <SidebarMenu>
      {group.children.map(({ id, type, icon, path, onClick }) => (
        <SidebarMenuSubItem key={id} className="group/action">
          {type === "link" ? (
            <Button
              asChild
              variant="ghost"
              className="w-full hover:bg-white"
              onClick={onClick}
            >
              <Link to={path}>{icon}</Link>
            </Button>
          ) : (
            <Button
              variant="ghost"
              className="w-full hover:bg-white"
              onClick={onClick}
            >
              {icon}
            </Button>
          )}
        </SidebarMenuSubItem>
      ))}
    </SidebarMenu>
  </SidebarGroup>
);
