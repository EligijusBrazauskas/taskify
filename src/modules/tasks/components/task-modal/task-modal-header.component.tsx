import { Edit, Ellipsis, Maximize2 } from "lucide-react";
import { Divider, Flex } from "@/components/base";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { NavBarBreadcrumbs } from "@/modules/_shared/components/navbar";
import { taskBreadcrumbs } from "@/modules/_shared/components/navbar/defaults";

//TODO: Add modal to project overview
export const TaskModalHeader = () => (
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
        <NavBarBreadcrumbs breadcrumbs={taskBreadcrumbs("TEST", "TEST")} />
      </Flex>
      <Button variant="ghost">
        <Ellipsis />
      </Button>
    </Flex>
  </DialogHeader>
);
