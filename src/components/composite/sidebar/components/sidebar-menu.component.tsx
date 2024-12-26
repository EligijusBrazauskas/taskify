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
      className="[&_.chevron]:data-[state=open]:rotate-180"
    >
      <CollapsibleTrigger asChild className="w-full">
        <Button variant="menuButton" size="sm">
          <Typography>MAIN MENU</Typography>
          <ChevronDown className="chevron transition-transform" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="bg-white md:bg-secondary-background">
        <SidebarGroupContent>
          <ShadcnSidebarMenu>
            <SidebarMenuItem>
              <Button variant="menuItem" size="sm">
                <Search />
                <Typography>Search</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="sm">
                <FolderKanban />
                <Typography>Projects</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="sm">
                <Tickets />
                <Typography>Issues</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="sm">
                <Tag />
                <Typography>Tags</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="sm">
                <SquareUserRound />
                <Typography>Activity</Typography>
              </Button>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Button variant="menuItem" size="sm">
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
