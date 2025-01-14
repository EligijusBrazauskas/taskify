import { Button, ButtonProps } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { useBreakpoint } from "@/hooks";
import clsx from "clsx";
import { PanelLeftOpen } from "lucide-react";

export const SideBarTrigger = ({ children, ...rest }: ButtonProps) => {
  const { open, toggleSidebar } = useSidebar();
  const [isMd] = useBreakpoint(["md"]);

  return (
    <Button
      variant="ghost"
      className="self-center"
      onClick={toggleSidebar}
      {...rest}
    >
      {children ?? (
        <PanelLeftOpen className={clsx(open && !isMd && "rotate-180")} />
      )}
    </Button>
  );
};
