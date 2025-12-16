import { Flex } from "@/components/base";
import { StatusLabel } from "@/components/composite/board/status-label.component";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Status } from "@/interfaces";
import { Project } from "@/modules/projects/interfaces";
import { EyeOff, Plus } from "lucide-react";

interface ColumnHeader {
  status: Status;
  projects: Project[];
}

export const ColumnHeader = ({ status, projects }: ColumnHeader) => (
  <Flex className="group cursor-grab items-center justify-between rounded-md bg-secondary-soft px-2 py-1 text-sm transition-all duration-200">
    <Flex className="items-center gap-2 overflow-hidden p-0.5">
      <Button
        size="xs"
        variant="ghost"
        className="justify-start truncate text-primary hover:bg-secondary-light"
      >
        <StatusLabel status={status} />
      </Button>
      {projects.length && (
        <Badge colorScheme="violet" className="self-center">
          {projects.length}
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
