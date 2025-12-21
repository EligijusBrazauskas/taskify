import { sortBy } from "lodash";
import { Plus } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Divider, Flex, Typography } from "@/modules/_shared/components/base";
import {
  Board,
  BoardColumn,
  BoardColumnHeader,
  BoardColumnItem,
} from "@/modules/_shared/components/board";
import { Filters } from "@/modules/_shared/components/filters";
import {
  NavBar,
  NavBarActions,
  NavBarBreadcrumbs,
} from "@/modules/_shared/components/navbar";
import {
  taskBreadcrumbs,
  tasksActions,
  tasksBreadcrumbs,
} from "@/modules/_shared/components/navbar/defaults";
import { useContainerQuery, useToast } from "@/modules/_shared/hooks";
import { useProjectStatusesQuery } from "@/modules/projects/api/queries";
import { useTasksSuspenseQuery } from "@/modules/tasks/api/queries";
import {
  TaskModal,
  TaskModalDetails,
  TaskModalHeader,
} from "@/modules/tasks/components/task-modal";
import { Route } from "@/routes/tasks";

export const TasksPage = () => {
  const ref = useRef(null);
  const [isMd, is3Xl] = useContainerQuery(["md", "3xl"]);
  const { toast } = useToast();

  const navigate = Route.useNavigate();
  const { taskId } = Route.useSearch();

  const {
    data: { data: tasks },
    isSuccess,
  } = useTasksSuspenseQuery();
  const { data: projectStatuses } = useProjectStatusesQuery();

  const sortedStatuses = sortBy(projectStatuses, "order");
  const task = tasks.find(({ id }) => id === String(taskId));

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

  const handleModalOnClick = (taskId: string) => {
    navigate({
      search: (previous) => ({ ...previous, taskId: Number(taskId) }),
    });
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
          <Flex className="h-full overflow-hidden">
            <TabsContent value="board" className="w-full">
              <Board>
                {sortedStatuses.map((status) => {
                  const filteredTasks = tasks.filter(
                    (task) => task.statusId === status.id,
                  );

                  return (
                    <BoardColumn
                      key={status.id}
                      Header={
                        <BoardColumnHeader
                          status={status}
                          count={filteredTasks.length}
                        />
                      }
                      Content={filteredTasks.map((task) => (
                        <DialogTrigger
                          asChild
                          className="text-left"
                          key={task.id}
                          onClick={() => {
                            handleModalOnClick(task.id);
                          }}
                        >
                          <BoardColumnItem
                            title={task.title}
                            description={task.description}
                            priority={task.priority}
                          />
                        </DialogTrigger>
                      ))}
                    />
                  );
                })}
              </Board>
            </TabsContent>
            <TabsContent value="list">
              <Flex>List</Flex>
            </TabsContent>
            <TabsContent value="timeline">
              <Flex>Timeline</Flex>
            </TabsContent>
          </Flex>
          <TaskModal
            Header={
              <TaskModalHeader
                breadcrumbs={taskBreadcrumbs(`#${taskId}`, String(taskId))}
              />
            }
            Content={task && <TaskModalDetails task={task} />}
            task={task}
          />
        </Dialog>
      </Tabs>
    </Flex>
  );
};
