import { Typography } from "@/components/base";
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
import {
  ChevronDown,
  FolderKanban,
  MessageSquare,
  Search,
  SquareUserRound,
  Tag,
  Tickets,
} from "lucide-react";

export const SidebarMenu = () => (
  <SidebarGroup>
    <Collapsible
      defaultOpen
      className="flex flex-col gap-2 [&_.chevron]:data-[state=open]:rotate-180"
    >
      <CollapsibleTrigger asChild className="w-full">
        <Button variant="menu" size="menu">
          <Typography>MAIN MENU</Typography>
          <ChevronDown className="chevron transition-transform" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
        <SidebarGroupContent>
          <ShadcnSidebarMenu>
            <SidebarMenuItem>
              <Button variant="menuItem" size="menu">
                <Search />
                <Typography>Search</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="menu">
                <FolderKanban />
                <Typography>Projects</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="menu">
                <Tickets />
                <Typography>Issues</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="menu">
                <Tag />
                <Typography>Tags</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="menu">
                <SquareUserRound />
                <Typography>Activity</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="menu">
                <MessageSquare />
                <Typography>Comments</Typography>
              </Button>
            </SidebarMenuItem>
          </ShadcnSidebarMenu>
        </SidebarGroupContent>
      </CollapsibleContent>
    </Collapsible>
  </SidebarGroup>
);
