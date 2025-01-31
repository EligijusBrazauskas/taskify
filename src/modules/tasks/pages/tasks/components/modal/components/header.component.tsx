import { Divider, Flex } from "@/components/base";
import { NavBarBreadcrumb } from "@/components/composite/navbar/components/navbar-breadcrumb.component";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Edit, Ellipsis, Maximize2 } from "lucide-react";

export const Header = () => (
  <DialogHeader className="p-2">
    <Flex className="mr-2 w-full justify-between">
      <Flex className="gap-2">
        <Button variant="ghost" className="self-center">
          <Maximize2 />
        </Button>
        <Button variant="ghost">
          <Edit />
        </Button>
        <Divider />
        <NavBarBreadcrumb />
      </Flex>
      <Button variant="ghost">
        <Ellipsis />
      </Button>
    </Flex>
  </DialogHeader>
);
