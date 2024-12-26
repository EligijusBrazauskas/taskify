import { Typography } from "@/components/base";
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
} from "@/components/ui/sidebar";
import { ChevronDown, FolderOpenDot, Minus, Plus } from "lucide-react";

export const SidebarProjects = () => (
  <SidebarGroup>
    <Collapsible
      defaultOpen
      className="[&_.chevron]:data-[state=open]:rotate-180"
    >
      <CollapsibleTrigger asChild className="w-full">
        <Button variant="menuButton" size="sm">
          <Typography>MY PROJECTS</Typography>
          <ChevronDown className="chevron transition-transform" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-white md:bg-secondary-background">
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Button variant="menuItem" size="sm">
                <FolderOpenDot />
                <Typography>Poject 1</Typography>
              </Button>
              <Button size="sm" variant="menuItem" className="w-auto">
                <Minus />
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="sm">
                <FolderOpenDot />
                <Typography>Poject 2</Typography>
              </Button>
              <Button size="sm" variant="menuItem" className="w-auto">
                <Minus />
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="sm">
                <FolderOpenDot />
                <Typography>Poject 3</Typography>
              </Button>
              <Button size="sm" variant="menuItem" className="w-auto">
                <Minus />
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="sm">
                <Plus />
                <Typography>New Project</Typography>
              </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </CollapsibleContent>
    </Collapsible>
  </SidebarGroup>
);
