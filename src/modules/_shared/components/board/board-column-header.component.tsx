import { EyeOff, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flex } from "@/modules/_shared/components/base";
import { StatusLabel } from "@/modules/_shared/components/status-label.component";
import { Status } from "@/modules/_shared/interfaces";

interface BoardColumnHeaderProps {
  status: Status;
  count?: number;
}

export const BoardColumnHeader = ({
  status,
  count,
}: BoardColumnHeaderProps) => (
  <Flex className="group cursor-grab items-center justify-between rounded-md bg-secondary-background px-2 py-1 text-sm transition-all duration-200">
    <Flex className="items-center gap-2 overflow-hidden p-0.5">
      <Button
        size="xs"
        variant="ghost"
        className="justify-start truncate text-primary hover:bg-secondary-light"
      >
        <StatusLabel status={status} />
      </Button>
      {!!count && (
        <Badge colorScheme="violet" className="self-center">
          {count}
        </Badge>
      )}
    </Flex>
    <Flex className="items-center justify-center gap-1">
      <Button
        size="xs"
        variant="ghost"
        className="opacity-0 hover:bg-secondary-light group-focus-within:opacity-100 group-hover:opacity-100"
      >
        <EyeOff size={18} />
      </Button>
      <Button size="xs" variant="ghost" className="hover:bg-secondary-light">
        <Plus size={18} />
      </Button>
    </Flex>
  </Flex>
);
