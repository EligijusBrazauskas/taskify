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
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  Drawer as ShadcnDrawer,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarGroup } from "@/components/ui/sidebar";
import { Menu, Plus } from "lucide-react";

export const Drawer = () => (
  <ShadcnDrawer autoFocus>
    <DrawerTrigger asChild>
      <Button variant="ghost" size="sm">
        <Menu />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <SidebarUserButton />
      </DrawerHeader>
      <ScrollArea className="flex flex-col">
        <Flex className="flex-col gap-2 overflow-auto py-2">
          <SidebarMenu />
          <SidebarMenu />
          <SidebarMenu />
          <SidebarProjects />
        </Flex>
        <SidebarGroup>
          <Card className="mt-4">
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
        </SidebarGroup>
      </ScrollArea>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline" size="default">
            Close
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </ShadcnDrawer>
);
