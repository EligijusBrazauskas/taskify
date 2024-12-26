import { Flex, Typography } from "@/components/base";
import { DrawerProfile } from "@/components/composite/drawer-profile";
import { SidebarMenu, SidebarProjects } from "@/components/composite/sidebar";
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
import { Menu, Plus } from "lucide-react";

export const DrawerMain = () => (
  <ShadcnDrawer autoFocus>
    <DrawerTrigger asChild>
      <Button variant="ghost" size="sm">
        <Menu />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader className="px-0">
        <DrawerProfile />
      </DrawerHeader>
      <ScrollArea className="flex flex-col">
        <Flex className="flex-col gap-2 overflow-auto pt-2 pb-4">
          <SidebarMenu />
          <SidebarProjects />
        </Flex>
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
