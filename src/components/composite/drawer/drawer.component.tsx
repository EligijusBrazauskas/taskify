import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Drawer as ShadcnDrawer,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";

export const Drawer = () => (
  <ShadcnDrawer autoFocus>
    <DrawerTrigger asChild>
      <Button variant="ghost">
        <Menu />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer Title</DrawerTitle>
        <DrawerDescription>Drawer Desc</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </ShadcnDrawer>
);
