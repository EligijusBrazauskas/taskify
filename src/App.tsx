import { Outlet } from "@tanstack/react-router";
import { Flex } from "@/components/base";
import { SideBar } from "@/components/composite/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

export const App = () => {
  // const { toast } = useToast();

  //TODO: Show toast to maybe suggest creating a first project
  // useEffect(() => {
  //   toast({
  //     title: "Start by creating your first project.",
  //     description: "Add issues to your projects to start task planning.",
  //     action: (
  //       <ToastAction altText="Add a new project" asChild>
  //         <Button className="self-start">
  //           <Plus />
  //           New Project
  //         </Button>
  //       </ToastAction>
  //     ),
  //   });
  // }, [toast]);

  return (
    <SidebarProvider>
      <SideBar />
      <Flex className="max-h-[100dvh] w-full md:py-2 md:pr-2">
        <Flex className="@container container-main h-full w-full overflow-hidden border bg-white md:rounded-lg">
          <Outlet />
        </Flex>
      </Flex>
      <Toaster />
    </SidebarProvider>
  );
};
