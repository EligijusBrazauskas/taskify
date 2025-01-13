import { Divider, Flex } from "@/components/base";
import { NavBar } from "@/components/composite/navbar";
import { SideBar } from "@/components/composite/sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks";
import { Outlet } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useEffect } from "react";

export const App = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Start by creating your first project.",
      description: "Add issues to your projects to start task planning.",
      action: (
        <ToastAction altText="Add a new project" asChild>
          <Button className="self-start">
            <Plus />
            New Project
          </Button>
        </ToastAction>
      ),
    });
  }, []);

  return (
    <SidebarProvider>
      <SideBar />
      <Flex className="max-h-[100dvh] w-full md:py-2 md:pr-2">
        <Flex className="@container container-main h-full w-full flex-col overflow-hidden border bg-white md:rounded-lg">
          <NavBar />
          <Divider orientation="horizontal" />
          <Outlet />
        </Flex>
      </Flex>
      <Toaster />
    </SidebarProvider>
  );
};
