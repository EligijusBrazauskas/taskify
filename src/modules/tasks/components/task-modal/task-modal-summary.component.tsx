import { format } from "date-fns";
import {
  Calendar,
  CircleDot,
  CircleUserRound,
  NotepadText,
  TagIcon,
} from "lucide-react";
import { Flex, Typography } from "@/components/base";
import { AvatarButton } from "@/components/composite/shared";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription } from "@/components/ui/card";
import { StatusLabel } from "@/modules/_shared/components";
import {
  priorityColorSchemeMap,
  priorityIconMap,
} from "@/modules/_shared/defaults";
import { useTaskStatusesQuery } from "@/modules/tasks/api/queries";
import { TaskModalSummaryItem } from "@/modules/tasks/components/task-modal";
import {
  taskTypeColorSchemeMap,
  taskTypeIconMap,
} from "@/modules/tasks/defaults";
import { Task } from "@/modules/tasks/interfaces";

interface TaskModalSummaryProps {
  task: Task;
}

export const TaskModalSummary = ({ task }: TaskModalSummaryProps) => {
  const handleOnAvatarClick = () => {};
  const { data: statuses } = useTaskStatusesQuery();

  const status = statuses.find(({ id }) => id === task?.statusId);

  return (
    <Flex className="w-full flex-col justify-between gap-4 px-6">
      <TaskModalSummaryItem label="Status" icon={<CircleDot size={16} />}>
        <StatusLabel status={status} />
      </TaskModalSummaryItem>
      {(task?.priority || task?.type) && (
        <TaskModalSummaryItem label="Tags" icon={<TagIcon size={16} />}>
          <Flex className="flex-wrap gap-2">
            {task?.type && (
              <Badge
                colorScheme={taskTypeColorSchemeMap[task.type]}
                className="self-center"
              >
                {taskTypeIconMap[task.type]}
                <Typography className="first-letter:uppercase">
                  {task.type}
                </Typography>
              </Badge>
            )}
            {task?.priority && (
              <Badge
                colorScheme={priorityColorSchemeMap[task.priority]}
                className="self-center"
              >
                {priorityIconMap[task.priority]}
                <Typography className="first-letter:uppercase">
                  {task.priority}
                </Typography>
              </Badge>
            )}
          </Flex>
        </TaskModalSummaryItem>
      )}
      <TaskModalSummaryItem
        label="Assignee"
        icon={<CircleUserRound size={16} />}
      >
        <AvatarButton onClick={handleOnAvatarClick} />
      </TaskModalSummaryItem>
      {task?.dueDate && (
        <TaskModalSummaryItem label="Date due" icon={<Calendar size={16} />}>
          <Typography>{format(task.dueDate, "d MMMM yyyy")}</Typography>
        </TaskModalSummaryItem>
      )}
      {task?.description && (
        <TaskModalSummaryItem
          label="Description"
          icon={<NotepadText size={16} />}
          className="flex-col items-start gap-2"
        >
          <Card className="w-full">
            <CardDescription className="text-primary">
              {task.description}
            </CardDescription>
          </Card>
        </TaskModalSummaryItem>
      )}
    </Flex>
  );
};
