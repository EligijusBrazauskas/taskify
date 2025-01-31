import { Box, Flex, Typography } from "@/components/base";
import { getStatusColor } from "@/helpers";
import { Status } from "@/interfaces";
import { cn } from "@/lib/utils";

interface StatusLabelProps {
  status: Status;
}

export const StatusLabel = ({ status }: StatusLabelProps) => (
  <Flex className="items-center justify-center gap-2 truncate">
    <Box
      className={cn(
        "relative -after:top-px -after:left-px flex size-3 flex-shrink-0 items-center justify-center rounded-full after:absolute after:size-2.5 after:rounded-full after:bg-secondary-body after:content-['_']",
        getStatusColor(status.color),
      )}
    />
    <Typography className="truncate">{status.label}</Typography>
  </Flex>
);
