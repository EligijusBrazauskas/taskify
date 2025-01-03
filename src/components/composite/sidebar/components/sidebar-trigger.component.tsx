import { Button, ButtonProps } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import clsx from "clsx";
import { PanelLeftOpen } from "lucide-react";

export const SideBarTrigger = ({ children, ...rest }: ButtonProps) => {
  const { open, toggleSidebar } = useSidebar();
  const isMedium = useBreakpoint();

  return (
    <Button variant="ghost" onClick={toggleSidebar} {...rest}>
      {children ?? (
        <PanelLeftOpen className={clsx(open && !isMedium && "rotate-180")} />
      )}
    </Button>
  );
};
