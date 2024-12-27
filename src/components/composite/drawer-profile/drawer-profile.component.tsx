import { Flex, Typography } from "@/components/base";
import { SidebarUserButton } from "@/components/composite/sidebar";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LogOut, Settings } from "lucide-react";

export const DrawerProfile = () => (
  <Drawer autoFocus>
    <DrawerTrigger asChild>
      <SidebarUserButton />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Profile</DrawerTitle>
      </DrawerHeader>
      <ScrollArea className="flex flex-col">
        <Flex className="flex-col gap-2 overflow-auto px-2 py-2">
          <Button variant="menuItem" size="sm">
            <Settings />
            <Typography>Settings</Typography>
          </Button>
          <Button
            variant="menuItem"
            size="sm"
            className="text-text-danger hover:text-text-danger/70"
          >
            <LogOut />
            <Typography>Log Out</Typography>
          </Button>
        </Flex>
      </ScrollArea>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline" size="default">
            Close
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
