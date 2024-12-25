import { Flex, Typography } from "@/components/base";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const SidebarUserButton = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      className=" hover:bg-white hover:shadow-md justify-start"
    >
      <Avatar className="w-8 h-8 shadow-lg">
        <AvatarFallback className="bg-purple-200 text-text font-semibold">
          EB
        </AvatarFallback>
      </Avatar>
      <Flex className="flex-col text-start overflow-hidden">
        <Typography variant="default" className="font-semibold truncate">
          Eligijus Brazauskas
        </Typography>
        <Typography variant="secondary" size="xs" className="truncate">
          email@email.com
        </Typography>
      </Flex>
    </Button>
  );
};
