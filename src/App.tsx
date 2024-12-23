import { Divider, Flex } from "@/components/base";
import { NavBar } from "@/components/composite/navbar";
import { Sidebar } from "@/components/composite/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const App = () => {
  return (
    <Flex className="min-h-screen w-screen">
      <SidebarProvider>
        <Sidebar />
        <Flex className="w-full p-2">
          <Flex className="flex-1 flex-col rounded-lg border border-secondary-border bg-white">
            <NavBar />
            <Divider orientation="horizontal" />
          </Flex>
        </Flex>
      </SidebarProvider>
    </Flex>
  );
};
