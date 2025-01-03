import { Divider, Flex, Typography } from "@/components/base";
import { NavBar } from "@/components/composite/navbar";
import { SideBar } from "@/components/composite/sidebar";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { Outlet } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useEffect } from "react";

export const App = () => {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      open: true,
      title: "Start by creating your first project.",
      description: "Add issues to your projects to start task planning.",
      action: (
        <ToastAction altText="Add a new project" asChild>
          <Button size="md">
            <Plus />
            <Typography>New Project</Typography>
          </Button>
        </ToastAction>
      ),
    });
  }, []);

  return (
    <SidebarProvider>
      <SideBar />
      <Flex className="w-full md:py-2 md:pr-2">
        <Flex className="w-full flex-col border-1.5 border-secondary-light bg-white md:rounded-lg">
          <NavBar />
          <Divider orientation="horizontal" />
          <Outlet />
        </Flex>
      </Flex>
      <Toaster />
    </SidebarProvider>
  );
};
