import { Column } from "@/components/composite/shared";
import { ScrollBar } from "@/components/ui/scroll-area";
import { Status } from "@/interfaces";
import { statuses } from "@/mocks";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useMatchRoute } from "@tanstack/react-router";
import { sortBy } from "lodash";

export const Board = () => {
  const matchRoute = useMatchRoute();

  const renderItems = (): Status[] => {
    if (matchRoute({ to: "/projects" })) {
      return sortBy(statuses, "order").filter(
        (status) => status.type === "project",
      );
    }

    if (
      matchRoute({ to: "/projects/$projectId" }) ||
      matchRoute({ to: "/tasks" })
    ) {
      return sortBy(statuses, "order").filter(
        (status) => status.type === "task",
      );
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
