import { ReactNode } from "react";
import { DialogContent } from "@/components/ui/dialog";
import { Divider } from "@/modules/_shared/components/base";
import { Task } from "@/modules/tasks/interfaces";

interface TaskModalProps {
  task?: Task;
  Header?: ReactNode;
  Details?: ReactNode;
}

export const TaskModal = ({ Header, Details }: TaskModalProps) => (
  <DialogContent className="data-[state=closed]:slide-out-to-top-[0%] data-[state=open]:slide-in-from-top-[0%] h-full gap-0 p-0 sm:h-[calc(100%-16px)] md:top-1/2 md:right-2 md:translate-x-0">
    {Header}
    <Divider orientation="horizontal" />
    {Details}
  </DialogContent>
);
