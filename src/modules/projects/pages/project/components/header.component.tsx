import { Flex, Typography } from "@/components/base";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BookOpenText } from "lucide-react";

export const Header = () => (
  <Flex className="items-center justify-between gap-2 px-6 pt-6 pb-4">
    <Flex className=" gap-2">
      <Avatar className="size-8 rounded-sm">
        <AvatarFallback className="rounded-sm bg-orange-700/80 font-semibold text-white">
          P1
        </AvatarFallback>
      </Avatar>
      <Typography size="2xl" className="text-nowrap">
        Projektas 1
      </Typography>
    </Flex>
    <Button variant="outline">
      <BookOpenText />
      Overview
    </Button>
  </Flex>
);
