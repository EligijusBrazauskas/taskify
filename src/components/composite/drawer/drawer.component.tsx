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
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Menu } from "lucide-react";

export const Drawer = () => (
  <ShadcnDrawer autoFocus>
    <DrawerTrigger asChild>
      <Button variant="ghost">
        <Menu />
      </Button>
    </DrawerTrigger>
    <DrawerContent className="max-h-[80vh]">
      <ScrollArea className="overflow-y-scroll flex flex-col gap-2 py-2">
        <DrawerHeader>
          <SidebarUserButton />
        </DrawerHeader>
        <SidebarMenu />
        <SidebarProjects />
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
