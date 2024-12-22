import { Button, Divider } from "@/components/base";
import { Flex } from "@/components/base/flex.component";
import { SidebarTrigger } from "@/components/composite/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const NavBar = () => (
  <Flex className="items-center gap-2">
    <SidebarTrigger />
    <Divider />
    <Flex>
      <Button variant="ghost">
        <ChevronLeft />
      </Button>
      <Button variant="ghost">
        <ChevronRight />
      </Button>
    </Flex>
    <Divider />
  </Flex>
);
