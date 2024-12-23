import { Flex } from "@/components/base";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export const Sidebar = () => (
  <ShadcnSidebar className="group-data-[side=left]:border-0">
    <Flex className="flex-col py-2 pl-2">
      <SidebarHeader>Header</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>Group 1</SidebarGroup>
        <SidebarGroup>Group 2</SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Footer</SidebarFooter>
    </Flex>
  </ShadcnSidebar>
);
