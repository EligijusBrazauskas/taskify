import { ScrollArea } from "@radix-ui/react-scroll-area";
import { sortBy } from "lodash";
import { ScrollBar } from "@/components/ui/scroll-area";
import { useProjectStatusesQuery } from "@/modules/projects/api/queries";
import { Task } from "@/modules/tasks/interfaces";
import { Column } from "@/modules/tasks/pages/tasks/components";

interface BoardProps {
  tasks: Task[];
}

export const Board = ({ tasks }: BoardProps) => {
  //TODO: now passing as props but later use query caching to avoid prop drills
  const { data: projectStatuses } = useProjectStatusesQuery();
  const sortedStatuses = sortBy(projectStatuses, "order");

  return (
    <ScrollArea className="flex h-full w-full gap-4 overflow-auto px-6 ">
      {sortedStatuses.map((status) => (
        <Column key={status.id} status={status} tasks={tasks} />
      ))}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
