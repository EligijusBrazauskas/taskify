import { Flex } from "@/components/base";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const NavBarPagination = () => (
  <Flex>
    <Button variant="ghost">
      <ChevronLeft />
    </Button>
    <Button variant="ghost">
      <ChevronRight />
    </Button>
  </Flex>
);
