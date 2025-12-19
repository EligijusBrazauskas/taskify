import { Flex } from "@/components/base";
import { Status } from "@/modules/_shared/interfaces";
import {
  ColumnHeader,
  ColumnItem,
} from "@/modules/projects/pages/project/components";
import { Task } from "@/modules/tasks/interfaces";
import { Route } from "@/routes/projects/$projectId";

interface ColumnProps {
  status: Status;
  tasks: Task[];
}

export const Column = ({ status, tasks }: ColumnProps) => {
  //TODO: for now filtering all tasks to get specific ones, implement requests to get tasks by status
  //TODO: normalize params and id's as strings instead of numbers
  const { projectId } = Route.useParams();
  const filteredTasks = tasks.filter(
    (task) =>
      task.statusId === status.id && String(task.projectId) === projectId,
  );

  return (
    <Flex className="h-full w-full @2xl:min-w-60 min-w-48 max-w-80 flex-col pt-4">
      <ColumnHeader status={status} tasks={filteredTasks} />
      <Flex className="flex-col gap-4 py-4">
        {filteredTasks.map((task) => (
          <ColumnItem key={task.id} task={task} />
        ))}
      </Flex>
    </Flex>
  );
};
