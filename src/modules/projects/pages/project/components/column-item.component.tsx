import { Divider, Flex, Typography } from "@/components/base";
import { AvatarButton } from "@/components/composite/shared";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DialogTrigger } from "@/components/ui/dialog";
import { taskComments } from "@/mocks";
import {
  priorityColorSchemeMap,
  priorityIconMap,
} from "@/modules/_shared/defaults";
import {
  taskTypeColorSchemeMap,
  taskTypeIconMap,
} from "@/modules/tasks/defaults";
import { Task } from "@/modules/tasks/interfaces";
import { Route } from "@/routes/projects/$projectId";
import { Ellipsis, MessageSquare } from "lucide-react";
import { MouseEvent } from "react";

interface ColumnItem {
  task: Task;
}

export const ColumnItem = ({ task }: ColumnItem) => {
  const navigate = Route.useNavigate();

  const handleModalOnClick = () => {
    navigate({
      search: (previous) => ({ ...previous, taskId: task.id }),
    });
  };

  const handleOnCommentsClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const handleOnMoreClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const handleOnAvatarClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <DialogTrigger onClick={handleModalOnClick} asChild>
      <Card
        className="cursor-pointer transition-all duration-200 hover:bg-secondary-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        tabIndex={0}
      >
        <CardHeader>
          <Flex className="w-full justify-between">
            <Flex className="flex-wrap gap-2">
              {task.type && (
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
              {task.priority && (
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
            <Button
              variant="ghost"
              className="self-start hover:bg-secondary-light"
              onClick={handleOnMoreClick}
            >
              <Ellipsis />
            </Button>
          </Flex>
        </CardHeader>
        <CardContent>
          <CardTitle>
            <Typography className="line-clamp-2">{task.title}</Typography>
          </CardTitle>
          {task.description && (
            <CardDescription>
              <Typography className="line-clamp-3">
                {task.description}
              </Typography>
            </CardDescription>
          )}
        </CardContent>
        <Divider orientation="horizontal" className="my-2" />
        <CardFooter>
          <Flex className="w-full justify-between">
            <AvatarButton onClick={handleOnAvatarClick} />
            <Button
              variant="ghost"
              size="xs"
              className="gap-1 hover:bg-secondary-light"
              onClick={handleOnCommentsClick}
            >
              <MessageSquare size={20} className="stroke-0.25" />
              {taskComments.length}
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </DialogTrigger>
  );
};
