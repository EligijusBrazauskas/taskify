import { sortBy } from "lodash";
import { Ellipsis, Plus } from "lucide-react";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Avatar } from "@/modules/_shared/components";
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
import { acronym, joinStrings } from "@/modules/_shared/helpers";
import { useContainerQuery, useToast } from "@/modules/_shared/hooks";
import { useProjectStatusesQuery } from "@/modules/projects/api/queries";
import {
  useTaskAttachmentsQuery,
  useTaskCommentsQuery,
  useTasksSuspenseQuery,
} from "@/modules/tasks/api/queries";
import {
  TaskModalContent,
  TaskModalDetails,
  TaskModalDetailsTabs,
  TaskModalHeader,
  TaskModalSummary,
} from "@/modules/tasks/components/task-modal";
import { Route } from "@/routes/tasks";

export const TasksPage = () => {
  const [isMd, is3Xl] = useContainerQuery(["md", "3xl"]);
  const { toast } = useToast();

  const navigate = Route.useNavigate();
  const { taskId } = Route.useSearch();

  //TODO: figure out how to better compose queries and use them only where data is needed
  const {
    data: { data: tasks },
    isSuccess,
  } = useTasksSuspenseQuery();
  const { data: projectStatuses } = useProjectStatusesQuery();
  const { data: taskComments } = useTaskCommentsQuery();
  const { data: taskAttachments } = useTaskAttachmentsQuery();

  const sortedStatuses = sortBy(projectStatuses, "order");
  const filteredComments = taskComments.filter(
    (comment) => comment.taskId === String(taskId),
  );
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
                <Plus size={16} />
                {is3Xl && <Typography>New Task</Typography>}
              </Button>
            )
          }
        />
        <Dialog open={!!task} onOpenChange={handleOnOpenChange}>
          <DialogOverlay />
          <Flex className="h-full overflow-hidden">
            <TabsContent value="board" asChild>
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
                      Content={filteredTasks.map((task) => {
                        const filteredComments = taskComments.filter(
                          (comment) => comment.taskId === task?.id,
                        );

                        const filteredAttachments = taskAttachments.filter(
                          (attachment) => attachment.taskId === task?.id,
                        );

                        return (
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
                              type={task.type}
                              commentsCount={filteredComments.length}
                              attachmentsCount={filteredAttachments.length}
                              Avatar={
                                <Avatar
                                  avatarUrl={task.assignee?.avatarUrl}
                                  fallback={acronym([
                                    task.assignee?.name,
                                    task.assignee?.lastname,
                                  ])}
                                />
                              }
                            />
                          </DialogTrigger>
                        );
                      })}
                    />
                  );
                })}
              </Board>
            </TabsContent>
            <TabsContent value="list" asChild>
              <Flex>List</Flex>
            </TabsContent>
            <TabsContent value="timeline" asChild>
              <Flex>Timeline</Flex>
            </TabsContent>
          </Flex>
          <TaskModalContent
            Header={
              <TaskModalHeader
                breadcrumbs={taskBreadcrumbs(`#${taskId}`, String(taskId))}
              />
            }
            Content={
              task && (
                <TaskModalDetails>
                  <DialogTitle className="px-6">{task?.title}</DialogTitle>
                  <TaskModalSummary task={task} />
                  <TaskModalDetailsTabs
                    CommentsTab={
                      <Typography className="flex gap-1">
                        Comments
                        {!!filteredComments.length && (
                          <Badge colorScheme="violet" className="self-center">
                            {filteredComments.length}
                          </Badge>
                        )}
                      </Typography>
                    }
                    CommentsTabContent={
                      <Flex className="w-full flex-col">
                        <Flex className="w-full justify-between">
                          <Typography>Comments</Typography>
                          <Button variant="ghost">
                            <Ellipsis size={18} />
                          </Button>
                        </Flex>
                        <Flex className="flex-col gap-2">
                          {filteredComments.map((comment) => (
                            <Flex key={comment.id} className="gap-2">
                              <Avatar
                                avatarUrl={comment.author?.avatarUrl}
                                className="self-start"
                              />
                              <Flex className="flex-col gap-1">
                                <Typography className="font-semibold">
                                  {joinStrings([
                                    comment.author?.name,
                                    comment.author?.lastname,
                                  ])}
                                </Typography>
                                <Typography>{comment.description}</Typography>
                              </Flex>
                            </Flex>
                          ))}
                        </Flex>
                      </Flex>
                    }
                  />
                </TaskModalDetails>
              )
            }
          />
        </Dialog>
      </Tabs>
    </Flex>
  );
};
