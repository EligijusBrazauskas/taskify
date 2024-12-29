import { MenuGroup } from "@/components/composite/shared/interfaces";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

interface NavigationMenuCollapsedProps {
  group: MenuGroup;
}

export const NavigationMenuCollapsed = ({
  group,
}: NavigationMenuCollapsedProps) => (
  <SidebarGroup>
    <SidebarMenu>
      {group.children.map(({ id, icon }) => (
        <SidebarMenuSubItem key={id} className="group/menu-item">
          <Button variant="menuItem" size="sm" className="justify-center px-1">
            {icon}
          </Button>
        </SidebarMenuSubItem>
      ))}
    </SidebarMenu>
  </SidebarGroup>
);
