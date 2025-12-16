import { useTasksQuery } from "@/api/queries";
import { Flex } from "@/components/base";
import { Filters } from "@/components/composite/page";
import { Dialog } from "@/components/ui/dialog";
import { Tabs } from "@/components/ui/tabs";
import { useToast } from "@/hooks";
import { TaskModal } from "@/modules/_shared/components/task-modal.component.tsx";
import {
  Content,
  PageHeader,
} from "@/modules/projects/pages/project/components";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect } from "react";

export const ProjectPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { taskId } = useSearch({ from: "/projects/$projectId/" });
  const { data: tasks, isSuccess } = useTasksQuery();
  const task = tasks.find(({ id }) => id === taskId);

  useEffect(() => {
    if (isSuccess && taskId && !task) {
      navigate({
        from: "/projects/$projectId",
        search: (previous) => ({ ...previous, taskId: undefined }),
      });

      toast({
        title: "Task could not be found in this project",
      });
    }
  }, [task, taskId, toast, navigate, isSuccess]);

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      navigate({
        from: "/projects/$projectId",
        search: (previous) => ({ ...previous, taskId: undefined }),
      });
    }
  };

  return (
    <Flex className="h-full flex-col overflow-hidden">
      <PageHeader />
      <Tabs
        defaultValue="board"
        className="flex h-full flex-col overflow-hidden"
      >
        <Filters />
        <Dialog open={!!task} onOpenChange={handleOnOpenChange}>
          <Content tasks={tasks} />
          <TaskModal task={task} />
        </Dialog>
      </Tabs>
    </Flex>
  );
};
