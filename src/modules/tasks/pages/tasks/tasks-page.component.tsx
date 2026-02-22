import { formatDistance } from "date-fns";
import { sortBy } from "lodash";
import { Ellipsis, Paperclip, Plus, Send, SmilePlus } from "lucide-react";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogFooter,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
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
import {
  useTaskAttachmentsQuery,
  useTaskCommentsQuery,
  useTaskStatusesQuery,
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
  const { data: taskStatuses } = useTaskStatusesQuery();
  const { data: taskComments } = useTaskCommentsQuery();
  const { data: taskAttachments } = useTaskAttachmentsQuery();

  const sortedStatuses = sortBy(taskStatuses, "order");
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
                    /*Todo: Add comments to project page, this means extracting this to a separate component*/
                    CommentsTabContent={
                      <Flex className="w-full flex-1 flex-col gap-2">
                        <Flex className="w-full justify-between">
                          <Typography>Comments</Typography>
                          <Button variant="ghost">
                            <Ellipsis size={18} />
                          </Button>
                        </Flex>
                        {!filteredComments.length && (
                          <Typography className="text-secondary">
                            No comments
                          </Typography>
                        )}
                        {!!filteredComments.length && (
                          <Flex className="flex-1 flex-col gap-4">
                            {filteredComments.map((comment) => (
                              <Flex
                                key={comment.id}
                                className="group/comment gap-2"
                              >
                                <Avatar
                                  avatarUrl={comment.author?.avatarUrl}
                                  className="self-start"
                                />
                                <Flex className="flex-col gap-1">
                                  <Flex className="items-center justify-between gap-1">
                                    <Flex className="gap-1">
                                      <Typography className="font-semibold">
                                        {joinStrings([
                                          comment.author?.name,
                                          comment.author?.lastname,
                                        ])}
                                      </Typography>
                                      <Typography className="text-secondary">
                                        &#x2022;
                                      </Typography>
                                      <Typography className="text-secondary">
                                        {formatDistance(
                                          comment.postedAt,
                                          new Date(),
                                        )}
                                      </Typography>
                                    </Flex>
                                    <Flex className="gap-1 opacity-0 transition group-hover/comment:opacity-100">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="rounded-full"
                                      >
                                        <SmilePlus size={16} />
                                      </Button>
                                      <Button variant="ghost" size="sm">
                                        <Ellipsis size={16} />
                                      </Button>
                                    </Flex>
                                  </Flex>
                                  <Typography>{comment.description}</Typography>
                                  <Flex className="items-center gap-1">
                                    {comment.reactions?.map((reaction) => (
                                      <Badge
                                        variant="secondary"
                                        className="cursor-pointer gap-1 rounded-lg"
                                        key={reaction.id}
                                      >
                                        <Typography>
                                          {reaction.reaction}
                                        </Typography>
                                        <Typography className="text-secondary">
                                          {reaction.count}
                                        </Typography>
                                      </Badge>
                                    ))}
                                    {!!comment.reactions?.length && (
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="rounded-full"
                                      >
                                        <SmilePlus size={16} />
                                      </Button>
                                    )}
                                  </Flex>
                                </Flex>
                              </Flex>
                            ))}
                          </Flex>
                        )}
                      </Flex>
                    }
                  />
                </TaskModalDetails>
              )
            }
            Footer={
              <DialogFooter className="flex-col">
                <Divider orientation="horizontal" />
                <Flex className="items-start justify-between gap-2 px-6 py-2">
                  <Textarea placeholder="Add comment" className="resize-none" />
                  <Flex className="gap-2">
                    <Button variant="outline">
                      <Paperclip size={16} />
                    </Button>
                    <Button>
                      <Send size={16} /> Send
                    </Button>
                  </Flex>
                </Flex>
              </DialogFooter>
            }
          />
        </Dialog>
      </Tabs>
    </Flex>
  );
};
