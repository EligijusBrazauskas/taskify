import { Divider, Flex, Typography } from "@/components/base";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useBreakpoint, useContainerQuery } from "@/hooks";
import { DropdownItem } from "@/modules/_shared/interfaces";
import { Ellipsis } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

interface NavBarActionsProps {
  actions: DropdownItem[];
}

export const NavBarActions = ({ actions }: NavBarActionsProps) => {
  const [isSm] = useBreakpoint(["sm"]);
  const [isXl] = useContainerQuery();

  if (isSm) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {actions.map(({ icon, label, onClick }, index) => (
            <DropdownMenuItem key={index} onClick={onClick}>
              {icon}
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Flex className="gap-2">
      {actions.map(({ icon, label }, index) => (
        <Fragment key={index}>
          {index === 1 && <Divider />}
          <Button variant="ghost">
            {icon}
            {isXl && !index && <Typography>{label}</Typography>}
          </Button>
        </Fragment>
      ))}
    </Flex>
  );
};
