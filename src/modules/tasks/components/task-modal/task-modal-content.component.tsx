import { DialogContentProps } from "@radix-ui/react-dialog";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Divider, Flex } from "@/modules/_shared/components/base";
import { taskBreadcrumbs } from "@/modules/_shared/components/navbar/defaults";
import {
  TaskModalDetailsTabs,
  TaskModalFooter,
  TaskModalHeader,
  TaskModalSummary,
} from "@/modules/tasks/components/task-modal";
import { Task, TaskComment } from "@/modules/tasks/interfaces";

interface TaskModalContentProps extends DialogContentProps {
  taskId: string;
  task?: Task;
  comments?: TaskComment[];
}

export const TaskModalContent = ({
  taskId,
  task,
  comments,
  className,
  ...rest
}: TaskModalContentProps) => (
  <DialogContent
    className={cn(
      "data-[state=closed]:slide-out-to-top-[0%] data-[state=open]:slide-in-from-top-[0%] h-full gap-0 p-0 sm:h-[calc(100%-16px)] md:top-1/2 md:right-2 md:translate-x-0",
      className,
    )}
    {...rest}
  >
    <TaskModalHeader
      breadcrumbs={taskBreadcrumbs(`#${taskId}`, String(taskId))}
    />
    <Divider orientation="horizontal" />
    {task && (
      <Flex className="h-full flex-col items-start gap-4 overflow-auto pt-4">
        <DialogTitle className="px-6">{task?.title}</DialogTitle>
        <TaskModalSummary task={task} />
        <TaskModalDetailsTabs comments={comments} />
      </Flex>
    )}
    <TaskModalFooter />
  </DialogContent>
);
