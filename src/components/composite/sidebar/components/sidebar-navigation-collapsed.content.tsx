import { MenuGroup } from "@/components/composite/sidebar/interfaces";
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
      {group.children.map((item) => (
        <SidebarMenuSubItem key={item.id} className="group/action">
          {item.type === "link" ? (
            <Button asChild variant="ghost" className="w-full">
              <Link to={item.path}>{item.icon}</Link>
            </Button>
          ) : (
            <Button variant="ghost" className="w-full" onClick={item.onClick}>
              {item.icon}
            </Button>
          )}
        </SidebarMenuSubItem>
      ))}
    </SidebarMenu>
  </SidebarGroup>
);
