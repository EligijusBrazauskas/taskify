import { Card, Flex, Typography } from "@/components/base";
import {
  SidebarMenu,
  SidebarProjects,
  SidebarUserButton,
} from "@/components/composite/sidebar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Plus } from "lucide-react";

export const Sidebar = () => {
  return (
    <ShadcnSidebar>
      <SidebarHeader>
        <SidebarUserButton />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea>
          <Flex className="flex-col py-2">
            <SidebarMenu />
            <SidebarMenu />
            <SidebarMenu />
            <SidebarMenu />
            <SidebarMenu />
            <SidebarProjects />
          </Flex>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <Card>
          <Typography size="sm">
            Start by creating your first project.
          </Typography>
          <Typography variant="secondary" size="xs">
            Add issues to your projects to start task planning.
          </Typography>
          <Button>
            <Plus />
            <Typography>New Project</Typography>
          </Button>
        </Card>
        <Typography variant="light" size="xs">
          Taskify v1.0.0
        </Typography>
      </SidebarFooter>
    </ShadcnSidebar>
  );
};
