import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { MenuItem } from "@/modules/_shared/components/sidebar/interfaces";

interface SideBarNavigationCollapsedProps {
  items: MenuItem[];
}

export const SideBarNavigationCollapsed = ({
  items,
}: SideBarNavigationCollapsedProps) => (
  <SidebarGroup>
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuSubItem key={item.id} className="group/action">
          {item.type === "link" ? (
            <Link
              to={item.to?.to}
              params={item.to?.params}
              className="flex items-center rounded-md px-2 py-1 text-secondary transition-all hover:bg-secondary-light hover:text-primary [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:stroke-0.25"
              activeProps={{
                className: "bg-secondary-light",
              }}
            >
              {item.icon}
            </Link>
          ) : (
            <Button
              variant="ghost"
              className="w-full transition-all hover:bg-secondary-light"
              onClick={item.onClick}
            >
              {item.icon}
            </Button>
          )}
        </SidebarMenuSubItem>
      ))}
    </SidebarMenu>
  </SidebarGroup>
);
