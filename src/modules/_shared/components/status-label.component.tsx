import { cn } from "@/lib/utils";
import { Box, Flex, Typography } from "@/modules/_shared/components/base";
import { statusColorMap } from "@/modules/_shared/defaults/status-color-map.default";
import { Status } from "@/modules/_shared/interfaces";

interface StatusLabelProps {
  status?: Status;
}

export const StatusLabel = ({ status }: StatusLabelProps) => (
  <Flex className="items-center justify-center gap-2 truncate">
    <Box
      className={cn(
        "relative -after:top-px -after:left-px flex size-3 flex-shrink-0 items-center justify-center rounded-full after:absolute after:size-2.5 after:rounded-full after:bg-secondary-background after:content-['_']",
        statusColorMap[status?.color ?? "secondary"],
      )}
    />
    <Typography className="truncate">{status?.label}</Typography>
  </Flex>
);
