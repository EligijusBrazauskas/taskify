import { Flex } from "@/components/base";
import { tasks } from "@/mocks/tasks.mock";
import { TaskStatus } from "@/modules/projects/interfaces";
import {
  Header,
  Task,
} from "@/modules/projects/pages/project/components/board/components/column";

interface ColumnProps {
  status: TaskStatus;
}

export const Column = ({ status }: ColumnProps) => (
  <Flex className="h-full w-full @2xl:min-w-60 min-w-48 max-w-80 flex-col pt-4">
    <Header status={status} />
    <Flex className="flex-col gap-4 py-4">
      {tasks
        .filter((task) => task.statusId === status.id)
        .map((task) => (
          <Task key={task.id} task={task} />
        ))}
    </Flex>
  </Flex>
);
