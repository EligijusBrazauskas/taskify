import { Flex } from "@/components/base";
import {
  SidebarMenu,
  SidebarProjects,
  SidebarUserButton,
} from "@/components/composite/sidebar";
import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  Drawer as ShadcnDrawer,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu } from "lucide-react";

export const Drawer = () => (
  <ShadcnDrawer autoFocus>
    <DrawerTrigger asChild>
      <Button variant="ghost" size="sm">
        <Menu />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <Flex className="flex-col pt-2 overflow-auto">
        <DrawerHeader>
          <SidebarUserButton />
        </DrawerHeader>
        <ScrollArea className="flex flex-col">
          <Flex className="flex-col py-4">
            <SidebarMenu />
            <SidebarMenu />
            <SidebarMenu />
            <SidebarProjects />
          </Flex>
        </ScrollArea>
      </Flex>
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
