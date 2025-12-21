import { sortBy } from "lodash";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
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
  projectActions,
  projectBreadcrumbs,
  taskBreadcrumb,
} from "@/modules/_shared/components/navbar/defaults";
import { useContainerQuery, useToast } from "@/modules/_shared/hooks";
import { useProjectsSuspenseQuery } from "@/modules/projects/api/queries";
import { PageHeader } from "@/modules/projects/pages/project/components";
import {
  useTaskStatusesQuery,
  useTasksSuspenseQuery,
} from "@/modules/tasks/api/queries";
import {
  TaskModal,
  TaskModalDetails,
  TaskModalHeader,
} from "@/modules/tasks/components/task-modal";
import { Route } from "@/routes/projects/$projectId";

export const ProjectPage = () => {
  const [isMd, is3Xl] = useContainerQuery(["md", "3xl"]);
  const { toast } = useToast();

  const navigate = Route.useNavigate();
  const { taskId } = Route.useSearch();
  const { projectId } = Route.useParams();

  const {
    data: { data: tasks },
    isSuccess,
  } = useTasksSuspenseQuery();
  const {
    data: { data: projects },
  } = useProjectsSuspenseQuery();
  const { data: taskStatuses } = useTaskStatusesQuery();

  const task = tasks.find(
    (task) => task.id === String(taskId) && task.projectId === projectId,
  );
  const sortedStatuses = sortBy(taskStatuses, "order");
  const project = projects.find((project) => String(project.id) === projectId);

  useEffect(() => {
    if (isSuccess && taskId && !task) {
      navigate({
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
        BreadCrumbs={
          <NavBarBreadcrumbs
            breadcrumbs={projectBreadcrumbs(
              project?.title ?? "Project",
              projectId,
            )}
          />
        }
        Actions={<NavBarActions actions={projectActions} />}
      />
      <Divider orientation="horizontal" />
      <PageHeader />
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
          <Flex className="h-full overflow-hidden">
            <TabsContent value="board" className="overflow-hidden">
              <Board>
                {sortedStatuses.map((status) => {
                  const filteredTasks = tasks.filter(
                    (task) =>
                      task.statusId === status.id &&
                      String(task.projectId) === projectId,
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
                          onClick={() => handleModalOnClick(task.id)}
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
                breadcrumbs={[
                  ...projectBreadcrumbs(project?.title ?? "Project", projectId),
                  ...taskBreadcrumb(`#${taskId}`, String(taskId)),
                ]}
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
