import { Edit, Ellipsis, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import { Divider, Flex } from "@/modules/_shared/components/base";
import { NavBarBreadcrumbs } from "@/modules/_shared/components/navbar";
import { Breadcrumb } from "@/modules/_shared/components/navbar/interfaces";

interface TaskModalHeaderProps {
  breadcrumbs: Breadcrumb[];
}

export const TaskModalHeader = ({ breadcrumbs }: TaskModalHeaderProps) => (
  <DialogHeader className="p-2">
    <Flex className="mr-2 w-full justify-between">
      <Flex className="gap-2">
        <Button variant="ghost" className="self-center">
          <Maximize2 size={18} />
        </Button>
        <Button variant="ghost">
          <Edit size={18} />
        </Button>
        <Divider />
        <NavBarBreadcrumbs breadcrumbs={breadcrumbs} />
      </Flex>
      <Button variant="ghost">
        <Ellipsis size={18} />
      </Button>
    </Flex>
  </DialogHeader>
);
