import { Flex } from "@/components/base";
import { DialogTitle } from "@/components/ui/dialog";
import {
  TaskModalDetailsTabs,
  TaskModalSummary,
} from "@/modules/_shared/components/task-modal.component.tsx";
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
