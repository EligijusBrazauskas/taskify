import { Flex, Typography } from "@/components/base";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const SidebarUserButton = () => {
  return (
    <Button
      variant="outline"
      className="py-1 px-2 h-auto border-1.5 rounded-lg hover:bg-white hover:shadow-md justify-start gap-2"
    >
      <Avatar className="w-8 h-8 shadow-lg ">
        <AvatarFallback className="bg-purple-200 text-text font-semibold">
          EB
        </AvatarFallback>
      </Avatar>
      <Flex className="flex-col text-start overflow-hidden">
        <Typography className="text-text font-semibold truncate">
          Eligijus Brazauskas
        </Typography>
        <Typography className="text-text-light text-xs truncate">
          email@email.com
        </Typography>
      </Flex>
    </Button>
  );
};
