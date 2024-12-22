import { Flex } from "@/components/base";
import { NavBar } from "@/components/composite/navbar";
import { Sidebar, SidebarProvider } from "@/components/composite/sidebar";

export const App = () => {
  return (
    <Flex className="min-h-screen w-screen">
      <SidebarProvider>
        <Sidebar />
        <Flex className="w-full bg-secondary-background p-2">
          <Flex className="flex-1 flex-col rounded-lg border border-secondary-border bg-white p-2">
            <NavBar />
            <Flex>FILTERS</Flex>
            <Flex>CONTENT</Flex>
          </Flex>
        </Flex>
      </SidebarProvider>
    </Flex>
  );
};
