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
import { useSidebar } from "@/components/ui/sidebar";
import { useBreakpoint } from "@/hooks";
import { ChevronsUpDown, LogOut, Settings } from "lucide-react";

export const SideBarUserButton = () => {
  const { state } = useSidebar();
  const [isMd] = useBreakpoint(["md"]);

  const avatar = (
    <Avatar className="size-8 rounded-sm">
      <AvatarFallback className="rounded-sm bg-blue-700/80 font-semibold text-white">
        EB
      </AvatarFallback>
    </Avatar>
  );

  const renderButton = () => {
    if (isMd || (!isMd && state === "expanded")) {
      return (
        <Button
          variant="ghost"
          className="items-center justify-between hover:bg-secondary-light"
        >
          <Flex className="items-center gap-2 overflow-hidden">
            {avatar}
            <Flex className="flex-col overflow-hidden text-start">
              <Typography variant="regular" className="truncate font-medium">
                Eligijus Brazauskas
              </Typography>
              <Typography variant="medium" size="xs" className="truncate">
                email@email.com
              </Typography>
            </Flex>
          </Flex>
          <ChevronsUpDown />
        </Button>
      );
    }

    return (
      <Button variant="ghost" className="mt-2 p-0">
        {avatar}
      </Button>
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{renderButton()}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Profile</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings />
          <Typography>Settings</Typography>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut />
          <Typography>Log Out</Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
