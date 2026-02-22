import { sortBy } from "lodash";
import { useEffect } from "react";
import { Dialog, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Avatar } from "@/modules/_shared/components";
import { Divider, Flex } from "@/modules/_shared/components/base";
import {
  Board,
  BoardColumn,
  BoardColumnHeader,
  BoardColumnItem,
} from "@/modules/_shared/components/board";
import { Filters } from "@/modules/_shared/components/filters";
import { NavBar } from "@/modules/_shared/components/navbar";
import { acronym } from "@/modules/_shared/helpers";
import { useContainerQuery, useToast } from "@/modules/_shared/hooks";
import {
  useTaskAttachmentsQuery,
  useTaskCommentsQuery,
  useTaskStatusesQuery,
  useTasksSuspenseQuery,
} from "@/modules/tasks/api/queries";
import { TaskModalContent } from "@/modules/tasks/components/task-modal";
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
      <NavBar />
      <Divider orientation="horizontal" />
      <Tabs
        defaultValue="board"
        className="flex h-full flex-col overflow-hidden"
      >
        <Filters />
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
            taskId={String(taskId)}
            task={task}
            comments={filteredComments}
          />
        </Dialog>
      </Tabs>
    </Flex>
  );
};
