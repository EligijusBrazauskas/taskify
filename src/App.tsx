import { Divider, Flex, Typography } from "@/components/base";
import { NavBar } from "@/components/composite/navbar";
import { SidebarMain } from "@/components/composite/sidebar-main";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
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
          <Button>
            <Plus />
            <Typography>New Project</Typography>
          </Button>
        </ToastAction>
      ),
    });
  }, []);

  return (
    <SidebarProvider>
      <SidebarMain />
      <Flex className="w-full md:py-2 md:pr-2">
        <Flex className="flex-1 flex-col border border-secondary-border bg-white md:rounded-lg">
          <NavBar />
          <Divider orientation="horizontal" />
        </Flex>
      </Flex>
      <Toaster />
    </SidebarProvider>
  );
};
