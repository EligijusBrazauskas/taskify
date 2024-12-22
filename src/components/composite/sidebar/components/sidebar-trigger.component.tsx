import { Button } from "@/components/base";
import { ButtonProps } from "@/components/ui/button";
import { DrawerTrigger } from "@/components/ui/drawer";
import { useSidebar } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, PanelLeftOpen } from "lucide-react";

export const SidebarTrigger = () => {
  const isMobile = useIsMobile();
  const { open, toggleSidebar } = useSidebar();

  const ButtonComponent = (props: ButtonProps) => (
    <Button variant="ghost" {...props}>
      {!isMobile ? (
        <PanelLeftOpen className={open ? "rotate-180" : ""} />
      ) : (
        <Menu />
      )}
    </Button>
  );

  if (!isMobile) {
    return <ButtonComponent onClick={toggleSidebar} />;
  }

  return (
    <DrawerTrigger asChild>
      <ButtonComponent />
    </DrawerTrigger>
  );
};
