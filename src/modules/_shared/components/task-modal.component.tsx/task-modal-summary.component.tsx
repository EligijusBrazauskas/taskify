import { useTaskStatusesQuery } from "@/api/queries";
import { Flex, Typography } from "@/components/base";
import { StatusLabel } from "@/components/composite/board";
import { AvatarButton } from "@/components/composite/shared";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription } from "@/components/ui/card";
import { getPriorityColorScheme, getPriorityIcon } from "@/helpers";
import { TaskModalSummaryItem } from "@/modules/_shared/components/task-modal.component.tsx";
import { getTypeColorScheme, getTypeIcon } from "@/modules/tasks/helpers";
import { Task } from "@/modules/tasks/interfaces";
import { format } from "date-fns";
import {
  Calendar,
  CircleDot,
  CircleUserRound,
  NotepadText,
  TagIcon,
} from "lucide-react";

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
                colorScheme={getTypeColorScheme(task.type)}
                className="self-center"
              >
                {getTypeIcon(task.type)}
                <Typography className="first-letter:uppercase">
                  {task.type}
                </Typography>
              </Badge>
            )}
            {task?.priority && (
              <Badge
                colorScheme={getPriorityColorScheme(task.priority)}
                className="self-center"
              >
                {getPriorityIcon(task.priority)}
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
