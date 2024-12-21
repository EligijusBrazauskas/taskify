import { Button } from "@/components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
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
      <ShadcnSidebar className="group-data-[side=left]:border-0 py-2 pl-2">
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
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Drawer Title</DrawerTitle>
        <DrawerDescription>Drawer Desc</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose>Cancel</DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  );
};
