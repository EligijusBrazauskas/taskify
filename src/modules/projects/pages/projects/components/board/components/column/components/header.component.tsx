import { Flex, Typography } from "@/components/base";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getStatusColor } from "@/modules/projects/helpers";
import { ProjectStatus } from "@/modules/projects/interfaces";
import { EyeOff, Plus } from "lucide-react";

interface HeaderProps {
  status: ProjectStatus;
}

export const Header = ({ status }: HeaderProps) => (
  <Flex className="group cursor-grab items-center justify-between rounded-md bg-secondary-body px-2 py-1 text-sm transition-all duration-200 hover:bg-secondary-light">
    <Flex className="items-center gap-2 overflow-hidden p-0.5">
      <Flex
        className={cn(
          "relative -after:top-px -after:left-px flex size-3 flex-shrink-0 items-center justify-center rounded-full after:absolute after:size-2.5 after:rounded-full after:bg-secondary-body after:content-['_']",
          getStatusColor(status.color),
        )}
      />
      <Button
        size="xs"
        variant="ghost"
        className="justify-start truncate text-primary"
      >
        <Typography className="truncate">{status.label}</Typography>
      </Button>
    </Flex>
    <Flex className="items-center justify-center gap-1">
      <Button
        size="xs"
        variant="ghost"
        className="opacity-0 group-focus-within:opacity-100 group-hover:opacity-100"
      >
        <EyeOff />
      </Button>
      <Button size="xs" variant="ghost">
        <Plus />
      </Button>
    </Flex>
  </Flex>
);
