import { Divider } from "@/components/base";
import { DialogContent } from "@/components/ui/dialog";
import { TaskModalDetails } from "@/modules/_shared/components/task-modal.component.tsx/task-modal-details.component";
import { TaskModalHeader } from "@/modules/_shared/components/task-modal.component.tsx/task-modal-header.component";
import { Task } from "@/modules/tasks/interfaces";

interface TaskModalProps {
  task?: Task;
}

export const TaskModal = ({ task }: TaskModalProps) => (
  <DialogContent className="data-[state=closed]:slide-out-to-top-[0%] data-[state=open]:slide-in-from-top-[0%] h-full gap-0 p-0 sm:h-[calc(100%-16px)] md:top-1/2 md:right-2 md:translate-x-0">
    <TaskModalHeader />
    <Divider orientation="horizontal" />
    {task && <TaskModalDetails task={task} />}
  </DialogContent>
);
