import { Typography } from "@/components/base";
import { MenuGroup } from "@/components/composite/sidebar";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenu as ShadcnSidebarMenu,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ChevronDown, Minus } from "lucide-react";

interface SidebarMenuProps {
  group: MenuGroup;
}

export const SidebarMenu = ({ group }: SidebarMenuProps) => {
  const { key, label, children } = group;

  return (
    <SidebarGroup key={key}>
      <Collapsible
        defaultOpen
        className="[&_.chevron]:data-[state=open]:rotate-180"
      >
        <CollapsibleTrigger asChild className="w-full">
          <Button variant="menuButton" size="sm">
            <Typography>{label.toUpperCase()}</Typography>
            <ChevronDown className="chevron transition-transform" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="bg-white md:bg-secondary-background">
          <SidebarGroupContent>
            <ShadcnSidebarMenu>
              {children.map(({ id, label, icon }) => (
                <SidebarMenuItem key={id}>
                  <Button variant="menuItem" size="sm">
                    {icon}
                    <Typography>{label}</Typography>
                  </Button>
                  {key === "pinnedProjects" && (
                    <Button variant="menuButton" size="sm">
                      <Minus />
                    </Button>
                  )}
                </SidebarMenuItem>
              ))}
            </ShadcnSidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
    </SidebarGroup>
  );
};
