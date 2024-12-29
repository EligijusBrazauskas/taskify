import { Flex, Typography } from "@/components/base";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";

interface NavigationUserButtonProps {
  isSidebarExpanded?: boolean;
}

export const NavigationUserButton = ({
  isSidebarExpanded = true,
}: NavigationUserButtonProps) => {
  const avatar = (
    <Avatar className="size-8 rounded-sm">
      <AvatarFallback className="rounded-sm bg-blue-700/80 font-semibold text-white">
        EB
      </AvatarFallback>
    </Avatar>
  );

  const renderButton = () => {
    if (isSidebarExpanded) {
      return (
        <Button
          variant="ghost"
          size="sm"
          className="justify-start hover:bg-secondary-hover md:hover:bg-white"
        >
          {avatar}
          <Flex className="flex-col overflow-hidden text-start">
            <Typography variant="default" className="truncate font-semibold">
              Eligijus Brazauskas
            </Typography>
            <Typography variant="secondary" size="xs" className="truncate">
              email@email.com
            </Typography>
          </Flex>
        </Button>
      );
    }

    return (
      <Button variant="ghost" size="sm" className="mt-2 justify-center p-0">
        {avatar}
      </Button>
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{renderButton()}</DropdownMenuTrigger>
      <DropdownMenuContent side="bottom">
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button variant="menuItem" size="sm">
            <Settings />
            <Typography>Settings</Typography>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Button variant="menuItem" size="sm">
            <LogOut />
            <Typography>Log Out</Typography>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
