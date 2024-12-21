import { Flex } from "@/components/base";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/composite/sidebar";

export const App = () => {
  return (
    <Flex className="min-h-screen w-screen">
      <SidebarProvider>
        <Sidebar />
        <Flex className="w-full p-2 bg-gray-50">
          <Flex className="bg-white flex-1 p-2 border rounded-lg flex-col">
            <Flex>
              <SidebarTrigger />
            </Flex>
            <Flex>FILTERS</Flex>
            <Flex>CONTENT</Flex>
          </Flex>
        </Flex>
      </SidebarProvider>
    </Flex>
  );
};
