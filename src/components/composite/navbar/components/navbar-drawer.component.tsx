import { Flex, Typography } from "@/components/base";
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
import { ArrowLeftRight, BookOpen } from "lucide-react";

export const NavBarDrawer = () => (
  <Drawer autoFocus>
    <DrawerTrigger asChild>
      <Button variant="ghost" size="sm">
        <ArrowLeftRight />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Jump to page</DrawerTitle>
      </DrawerHeader>
      <ScrollArea className="flex flex-col">
        <Flex className="flex-col gap-2 overflow-auto px-2 py-2">
          <Button variant="menuItem" size="sm">
            <BookOpen />
            <Typography>Home</Typography>
          </Button>
          <Button variant="menuItem" size="sm">
            <BookOpen />
            <Typography>Projects</Typography>
          </Button>
          <Button variant="menuItem" size="sm">
            <BookOpen />
            <Typography>Project</Typography>
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
