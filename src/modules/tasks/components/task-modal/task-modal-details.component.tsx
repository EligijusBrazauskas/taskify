import { DialogTitle } from "@/components/ui/dialog";
import { Flex } from "@/modules/_shared/components/base";
import {
  TaskModalDetailsTabs,
  TaskModalSummary,
} from "@/modules/tasks/components/task-modal";

import { Task } from "@/modules/tasks/interfaces";

interface TaskModalDetailsProps {
  task: Task;
}

export const TaskModalDetails = ({ task }: TaskModalDetailsProps) => {
  return (
    <Flex className="flex-col items-start gap-4 overflow-auto pt-4">
      <DialogTitle className="px-6">{task?.title}</DialogTitle>
      <TaskModalSummary task={task} />
      <TaskModalDetailsTabs />
    </Flex>
  );
};
