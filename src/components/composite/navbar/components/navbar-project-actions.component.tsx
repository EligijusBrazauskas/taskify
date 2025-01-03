import { Divider, Flex, Typography } from "@/components/base";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { Ellipsis, Pin, Plus, Star } from "lucide-react";

export const NavBarProjectActions = () => {
  const isSmall = useBreakpoint("sm");

  if (isSmall) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Plus />
            <Typography>New Project</Typography>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Star />
            <Typography>Favorite</Typography>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Pin />
            <Typography>Pin</Typography>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Flex className="gap-2">
      <Button variant="ghost">
        <Plus />
        <Typography className="@xl:flex hidden">New Project</Typography>
      </Button>
      <Divider />
      <Button variant="ghost">
        <Star />
      </Button>
      <Button variant="ghost">
        <Pin />
      </Button>
    </Flex>
  );
};
