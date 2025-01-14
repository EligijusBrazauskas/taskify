import { Divider, Flex, Typography } from "@/components/base";
import { getActionDefaults } from "@/components/composite/navbar/helpers";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useBreakpoint, useContainerQuery } from "@/hooks";
import { useLocation } from "@tanstack/react-router";
import { Ellipsis } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

export const NavBarActions = () => {
  const [isSm] = useBreakpoint(["sm"]);
  const [isXl] = useContainerQuery();
  const { pathname } = useLocation();

  if (isSm) {
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
        <Fragment key={index}>
          <Button variant="ghost">
            {icon}
            {isXl && !index && <Typography>{label}</Typography>}
          </Button>
          {!index && <Divider />}
        </Fragment>
      ))}
    </Flex>
  );
};
