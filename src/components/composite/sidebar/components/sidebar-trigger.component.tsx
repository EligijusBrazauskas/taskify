import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import clsx from "clsx";
import { PanelLeftOpen } from "lucide-react";

export const SidebarTrigger = () => {
  const { open, toggleSidebar } = useSidebar();

  return (
    <Button variant="ghost" size="sm" onClick={toggleSidebar}>
      <PanelLeftOpen className={clsx(open && "rotate-180")} />
    </Button>
  );
};
