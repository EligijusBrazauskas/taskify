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
import { ChevronDown, FolderOpenDot, Plus } from "lucide-react";

export const SidebarProjects = () => (
  <SidebarGroup>
    <Collapsible
      defaultOpen
      className="flex flex-col gap-2 [&_.chevron]:data-[state=open]:rotate-180"
    >
      <CollapsibleTrigger asChild className="w-full">
        <Button variant="menu" size="menu">
          <Typography>MY PROJECTS</Typography>
          <ChevronDown className="chevron transition-transform" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Button variant="menuItem" size="menu">
                <FolderOpenDot />
                <Typography>Poject 1</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="menu">
                <FolderOpenDot />
                <Typography>Poject 2</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="menu">
                <FolderOpenDot />
                <Typography>Poject 3</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="menu">
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
