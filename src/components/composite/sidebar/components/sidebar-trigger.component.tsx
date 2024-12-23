import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftOpen } from "lucide-react";

export const SidebarTrigger = () => {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Button variant="ghost" onClick={toggleSidebar}>
      <PanelLeftOpen className={open ? "rotate-180" : ""} />
    </Button>
  );
};
