import { UserInfoButton } from "@/components/composite/sidebar/components/user-info-button.component";
import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
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
        <UserInfoButton />
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose asChild>
          <Button variant="outline" size="default">
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </ShadcnDrawer>
);
