import { Flex } from "@/components/base/flex.component";
import { Sidebar } from "@/components/composite/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const App = () => {
  return (
    <Flex className="min-h-screen w-screen">
      <SidebarProvider>
        <Sidebar />
        <Flex className="w-full p-2 bg-slate-100">
          <Flex className="bg-white flex-1">
            <SidebarTrigger />
          </Flex>
        </Flex>
      </SidebarProvider>
    </Flex>
  );
};
