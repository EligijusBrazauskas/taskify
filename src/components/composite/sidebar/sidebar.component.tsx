import { Flex, Typography } from "@/components/base";
import {
  SidebarMenu,
  SidebarProjects,
  SidebarUserButton,
} from "@/components/composite/sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          <Flex className="flex-col gap-2 overflow-auto">
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
          <CardHeader>
            <CardTitle>Start by creating your first project.</CardTitle>
            <CardDescription>
              Add issues to your projects to start task planning.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button>
              <Plus />
              <Typography>New Project</Typography>
            </Button>
          </CardContent>
        </Card>
        <Typography variant="light" size="xs">
          Taskify v1.0.0
        </Typography>
      </SidebarFooter>
    </ShadcnSidebar>
  );
};
