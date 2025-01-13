import { projectStatuses } from "@/mocks/project-statuses.mock";
import { Column } from "@/modules/projects/pages/projects/components/board/components/column";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export const Board = () => (
  <ScrollArea className="flex h-full gap-4 overflow-auto px-6 ">
    {projectStatuses.map((status, index) => (
      <Column key={index} status={status} />
    ))}
  </ScrollArea>
);
