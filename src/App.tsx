import { Box } from "@/components/ui/base/box.component";
import { Flex } from "@/components/ui/base/flex.component";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const App = () => (
  <Flex className="min-h-screen w-screen">
    <SidebarProvider className=" bg-blue-200">
      <Sidebar>
        <SidebarHeader>USER</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>GROUP</SidebarGroup>
          <SidebarGroup>GROUP</SidebarGroup>
        </SidebarContent>
        <SidebarFooter>FOOTER</SidebarFooter>
      </Sidebar>
      <Flex className="w-full bg-red-200">
        <SidebarTrigger />
      </Flex>
    </SidebarProvider>
  </Flex>
);
