import { Flex } from "@/components/base";
import { UserInfoButton } from "@/components/composite/sidebar/components/user-info-button.component";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export const Sidebar = () => (
  <ShadcnSidebar>
    <Flex className="flex-col py-2 pl-2">
      <SidebarHeader>
        <UserInfoButton />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>Group 1</SidebarGroup>
        <SidebarGroup>Group 2</SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Footer</SidebarFooter>
    </Flex>
  </ShadcnSidebar>
);
