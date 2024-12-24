import { Card, Flex, Typography } from "@/components/base";
import {
  SidebarMenu,
  SidebarProjects,
  SidebarUserButton,
} from "@/components/composite/sidebar";
import { Button } from "@/components/ui/button";
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
      <Flex className="flex-col h-full pl-2 py-2 justify-between">
        <Flex className="flex-col overflow-auto">
          <SidebarHeader>
            <SidebarUserButton />
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu />
            <SidebarProjects />
          </SidebarContent>
        </Flex>
        <SidebarFooter>
          <Card>
            <Typography className="text-sm">
              Start by creating your first project.
            </Typography>
            <Typography className="text-xs text-secondary">
              Add issues to your projects to start task planning.
            </Typography>
            <Button>
              <Plus />
              <Typography>New Project</Typography>
            </Button>
          </Card>
          <Typography className="text-text-light text-xs">
            Taskify v1.0.0
          </Typography>
        </SidebarFooter>
      </Flex>
    </ShadcnSidebar>
  );
};
