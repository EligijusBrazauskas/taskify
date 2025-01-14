import { Flex } from "@/components/base";
import { Header, Task } from "@/components/composite/shared";
import { BaseStatus } from "@/interfaces";
import { projects } from "@/mocks";
import { tasks } from "@/mocks/tasks.mock";
import { TaskStatus } from "@/modules/tasks/interfaces";
import { useMatchRoute } from "@tanstack/react-router";

interface ColumnProps {
  status: BaseStatus | TaskStatus;
}

export const Column = ({ status }: ColumnProps) => {
  const matchRoute = useMatchRoute();

  const renderItems = () => {
    if (matchRoute({ to: "/projects" })) {
      return projects;
    }

    if (matchRoute({ to: "/projects/$projectId" })) {
      return tasks;
    }

    if (matchRoute({ to: "/tasks" })) {
      return tasks;
    }

    return [];
  };

  return (
    <Flex className="h-full w-full @2xl:min-w-60 min-w-48 max-w-80 flex-col pt-4">
      <Header status={status} />
      <Flex className="flex-col gap-4 py-4">
        {renderItems()
          .filter((task) => task.statusId === status.id)
          .map((task) => (
            <Task key={task.id} task={task} />
          ))}
      </Flex>
    </Flex>
  );
};
