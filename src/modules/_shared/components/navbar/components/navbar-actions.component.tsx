import { Ellipsis } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Divider, Flex, Typography } from "@/modules/_shared/components/base";
import { useBreakpoint, useContainerQuery } from "@/modules/_shared/hooks";
import { DropdownItem } from "@/modules/_shared/interfaces";

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
            <Ellipsis size={18} />
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
