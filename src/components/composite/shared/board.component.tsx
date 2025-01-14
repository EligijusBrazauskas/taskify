import { Column } from "@/components/composite/shared";
import { ScrollBar } from "@/components/ui/scroll-area";
import { BaseStatus } from "@/interfaces";
import { projectStatuses, taskStatuses } from "@/mocks";
import { TaskStatus } from "@/modules/tasks/interfaces";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useMatchRoute } from "@tanstack/react-router";

export const Board = () => {
  const matchRoute = useMatchRoute();

  const renderItems = (): BaseStatus[] | TaskStatus[] => {
    if (matchRoute({ to: "/projects" })) {
      return projectStatuses;
    }

    if (matchRoute({ to: "/projects/$projectId" })) {
      return taskStatuses;
    }

    if (matchRoute({ to: "/tasks" })) {
      return taskStatuses;
    }

    return [];
  };

  return (
    <ScrollArea className="flex h-full w-full gap-4 overflow-auto px-6 ">
      {renderItems().map((status, index) => (
        <Column key={index} status={status} />
      ))}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
