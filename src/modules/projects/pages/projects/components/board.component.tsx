import { useProjectStatusesQuery } from "@/api/queries";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Project } from "@/modules/projects/interfaces";
import { Column } from "@/modules/projects/pages/projects/components";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { sortBy } from "lodash";

interface BoardProps {
  projects: Project[];
}

export const Board = ({ projects }: BoardProps) => {
  //TODO: now passing as props but later use query caching to avoid prop drills
  const { data: projectStatuses, isLoading, error } = useProjectStatusesQuery();
  const sortedStatuses = sortBy(projectStatuses, "order");

  return (
    <ScrollArea className="flex h-full w-full gap-4 overflow-auto px-6 ">
      {sortedStatuses.map((status) => (
        <Column key={status.id} status={status} projects={projects} />
      ))}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
