import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export const Sidebar = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <ShadcnSidebar>
        <SidebarHeader>USER</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>GROUP</SidebarGroup>
          <SidebarGroup>GROUP</SidebarGroup>
        </SidebarContent>
        <SidebarFooter>FOOTER</SidebarFooter>
      </ShadcnSidebar>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger>Open drawer</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
