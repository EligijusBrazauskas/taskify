import { Divider, Flex } from "@/components/base";
import { Dialog, DialogOverlay } from "@/components/ui/dialog";
import { Tabs } from "@/components/ui/tabs";
import { useToast } from "@/hooks";
import { Filters } from "@/modules/_shared/components";
import {
  NavBar,
  NavBarActions,
  NavBarBreadcrumbs,
  tasksActions,
  tasksBreadcrumbs,
} from "@/modules/_shared/components/navbar";
import { useTasksSuspenseQuery } from "@/modules/tasks/api/queries";
import { TaskModal } from "@/modules/tasks/components/task-modal";
import { Content } from "@/modules/tasks/pages/tasks/components";
import { Route } from "@/routes/tasks";
import { useEffect } from "react";

export const TasksPage = () => {
  const { toast } = useToast();
  const navigate = Route.useNavigate();
  const { taskId } = Route.useSearch();
  const {
    data: { data: tasks },
    isSuccess,
  } = useTasksSuspenseQuery();

  const task = tasks.find(({ id }) => id === taskId);

  useEffect(() => {
    if (isSuccess && taskId && !task) {
      navigate({
        search: (previous) => ({ ...previous, taskId: undefined }),
      });

      toast({
        title: "Task could not be found",
      });
    }
  }, [task, taskId, toast, navigate, isSuccess]);

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      navigate({
        search: (previous) => ({ ...previous, taskId: undefined }),
      });
    }
  };

  return (
    <Flex className="h-full w-full flex-col overflow-hidden">
      <NavBar
        BreadCrumbs={<NavBarBreadcrumbs breadcrumbs={tasksBreadcrumbs} />}
        Actions={<NavBarActions actions={tasksActions} />}
      />
      <Divider orientation="horizontal" />
      <Tabs
        defaultValue="board"
        className="flex h-full flex-col overflow-hidden"
      >
        <Filters />
        <Dialog open={!!task} onOpenChange={handleOnOpenChange}>
          <DialogOverlay />
          <Content tasks={tasks} />
          <TaskModal task={task} />
        </Dialog>
      </Tabs>
    </Flex>
  );
};
