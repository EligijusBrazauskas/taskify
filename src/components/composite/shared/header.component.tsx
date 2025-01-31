import { Flex } from "@/components/base";
import { StatusLabel } from "@/components/composite/shared/status-label.component";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Status } from "@/interfaces";
import { Project } from "@/modules/projects/interfaces";
import { Task } from "@/modules/tasks/interfaces";
import { EyeOff, Plus } from "lucide-react";

interface HeaderProps {
  status: Status;
  tasks: (Task | Project)[];
}

export const Header = ({ status, tasks }: HeaderProps) => (
  <Flex className="group cursor-grab items-center justify-between rounded-md bg-secondary-body px-2 py-1 text-sm transition-all duration-200">
    <Flex className="items-center gap-2 overflow-hidden p-0.5">
      <Button
        size="xs"
        variant="ghost"
        className="justify-start truncate text-primary hover:bg-secondary-light"
      >
        <StatusLabel status={status} />
      </Button>
      {tasks.length && (
        <Badge
          colorScheme="bg-violet-100 text-violet-700"
          className="self-center"
        >
          {tasks.length}
        </Badge>
      )}
    </Flex>
    <Flex className="items-center justify-center gap-1">
      <Button
        size="xs"
        variant="ghost"
        className="opacity-0 hover:bg-secondary-light group-focus-within:opacity-100 group-hover:opacity-100"
      >
        <EyeOff />
      </Button>
      <Button size="xs" variant="ghost" className="hover:bg-secondary-light">
        <Plus />
      </Button>
    </Flex>
  </Flex>
);
