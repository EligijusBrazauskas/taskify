import { Plus } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogOverlay } from "@/components/ui/dialog";
import { Tabs } from "@/components/ui/tabs";
import { Divider, Flex, Typography } from "@/modules/_shared/components/base";
import { Filters } from "@/modules/_shared/components/filters";
import {
  NavBar,
  NavBarActions,
  NavBarBreadcrumbs,
} from "@/modules/_shared/components/navbar";
import {
  tasksActions,
  tasksBreadcrumbs,
} from "@/modules/_shared/components/navbar/defaults";
import { useContainerQuery, useToast } from "@/modules/_shared/hooks";
import { useTasksSuspenseQuery } from "@/modules/tasks/api/queries";
import { TaskModal } from "@/modules/tasks/components/task-modal";
import { Content } from "@/modules/tasks/pages/tasks/components";
import { Route } from "@/routes/tasks";

export const TasksPage = () => {
  const [isMd, is3Xl] = useContainerQuery(["md", "3xl"]);
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
        <Filters
          Action={
            isMd && (
              <Button>
                <Plus />
                {is3Xl && <Typography>New Task</Typography>}
              </Button>
            )
          }
        />
        <Dialog open={!!task} onOpenChange={handleOnOpenChange}>
          <DialogOverlay />
          <Content tasks={tasks} />
          <TaskModal task={task} />
        </Dialog>
      </Tabs>
    </Flex>
  );
};
