import { Typography } from "@/components/base";
import { MenuGroup } from "@/components/composite/shared/interfaces";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";

interface NavigationMenuProps {
  group: MenuGroup;
}

export const NavigationMenu = ({ group }: NavigationMenuProps) => {
  const { label, children } = group;

  return (
    <SidebarGroup>
      <SidebarMenu>
        <Collapsible
          defaultOpen
          className="[&_.chevron]:data-[state=open]:rotate-180"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <Button variant="menuButton" size="sm">
                <Typography>{label}</Typography>
                <ChevronDown className="chevron transition-transform" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSub>
                  {children.map(({ id, label, icon, action }) => (
                    <SidebarMenuSubItem key={id} className="group/menu-item">
                      <Button variant="menuItem" size="sm">
                        {icon}
                        <Typography>{label}</Typography>
                      </Button>
                      {action && (
                        <Button
                          variant="menuItem"
                          size="sm"
                          className="w-auto focus-visible:opacity-100 group-hover/menu-item:opacity-100 md:opacity-0"
                          onClick={action.onClick}
                        >
                          {action.icon}
                        </Button>
                      )}
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
};
