import { Flex } from "@/components/base";
import { Header, Task } from "@/components/composite/shared";
import { Status } from "@/interfaces";
import { projects } from "@/mocks";
import { tasks } from "@/mocks/tasks.mock";
import { useMatchRoute } from "@tanstack/react-router";

interface ColumnProps {
  status: Status;
}

export const Column = ({ status }: ColumnProps) => {
  const matchRoute = useMatchRoute();

  const renderItems = () => {
    if (matchRoute({ to: "/projects" })) {
      return projects;
    }

    if (
      matchRoute({ to: "/projects/$projectId" }) ||
      matchRoute({ to: "/tasks" })
    ) {
      return tasks;
    }

    return [];
  };

  const items = renderItems().filter((task) => task.statusId === status.id);

  return (
    <Flex className="h-full w-full @2xl:min-w-60 min-w-48 max-w-80 flex-col pt-4">
      <Header status={status} tasks={items} />
      <Flex className="flex-col gap-4 py-4">
        {items.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </Flex>
    </Flex>
  );
};
