import { Flex, Typography } from "@/components/base";
import {
  MenuGroup,
  SidebarMenu,
  SidebarUserButton,
  mockPinnedProjectsResponse,
  sidebarMenuConfig,
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
import { FolderOpen, Plus } from "lucide-react";

export const Sidebar = () => {
  const mockPinnedProjectsData: mockPinnedProjectsResponse = {
    data: [
      {
        id: 1,
        label: "Projektas",
      },
      {
        id: 2,
        label: "Projektas 2",
      },
      {
        id: 3,
        label: "Projektas 3",
      },
    ],
  };

  const configItems: MenuGroup[] = [
    {
      label: "PINNED PROJECTS",
      key: "pinnedProjects",
      children: mockPinnedProjectsData.data.map((item) => ({
        ...item,
        path: `pinned-projects/${item.id}`,
        icon: <FolderOpen />,
      })),
    },
  ];

  return (
    <ShadcnSidebar>
      <SidebarHeader>
        <SidebarUserButton />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea>
          <Flex className="flex-col gap-2 overflow-auto py-2">
            {sidebarMenuConfig(configItems).map((group) => (
              <SidebarMenu key={group.key} group={group} />
            ))}
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
