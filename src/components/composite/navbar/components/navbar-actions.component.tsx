import { Flex, Typography } from "@/components/base";
import { getActionDefaults } from "@/components/composite/navbar/helpers";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { useLocation } from "@tanstack/react-router";
import clsx from "clsx";
import { Ellipsis } from "lucide-react";

export const NavBarActions = () => {
  const isSmall = useBreakpoint("sm");
  const { pathname } = useLocation();

  if (isSmall) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {getActionDefaults(pathname).map(
            ({ icon, label, onClick }, index) => (
              <DropdownMenuItem key={index} onClick={onClick}>
                {icon}
                {label}
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Flex className="gap-2">
      {getActionDefaults(pathname).map(({ icon, label }, index) => (
        <Button key={index} variant="ghost">
          {icon}
          <Typography className={clsx("hidden", !index && "@xl:flex hidden")}>
            {label}
          </Typography>
        </Button>
      ))}
    </Flex>
  );
};
