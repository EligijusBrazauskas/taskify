import { Divider, Flex, Typography } from "@/components/base";
import { AvatarButton, Badge } from "@/components/composite/shared";
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
import { Project } from "@/modules/projects/interfaces";
import { Task as ITask } from "@/modules/tasks/interfaces";
import { useMatchRoute } from "@tanstack/react-router";
import { Ellipsis, MessageSquare } from "lucide-react";
import { MouseEvent } from "react";

interface TaskProps {
  task: ITask | Project;
}

export const Task = ({ task }: TaskProps) => {
  const matchRoute = useMatchRoute();

  const handleOnCommentsClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const handleOnMoreClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const handleOnAvatarClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const cardContent = (
    <Card
      className="cursor-pointer transition-all duration-200 hover:bg-secondary-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      tabIndex={0}
    >
      <CardHeader>
        <Flex className="w-full justify-between">
          <Flex className="flex-wrap gap-2">
            {"type" in task && task.type && <Badge property={task.type} />}
            {task.priority && <Badge property={task.priority} />}
          </Flex>
          <Button
            variant="ghost"
            className="hover:bg-secondary-light"
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
            <Typography className="line-clamp-3">{task.description}</Typography>
          </CardDescription>
        )}
      </CardContent>
      <Divider orientation="horizontal" className="my-2" />
      <CardFooter>
        <Flex className="w-full justify-between">
          <AvatarButton onClick={handleOnAvatarClick} />
          {"type" in task && (
            <Button
              variant="ghost"
              size="xs"
              className="gap-1 hover:bg-secondary-light"
              onClick={handleOnCommentsClick}
            >
              <MessageSquare size={20} className="stroke-0.25" />
              {taskComments.length}
            </Button>
          )}
        </Flex>
      </CardFooter>
    </Card>
  );

  if (
    matchRoute({ to: "/projects/$projectId" }) ||
    matchRoute({ to: "/tasks" })
  ) {
    return <DialogTrigger asChild>{cardContent}</DialogTrigger>;
  }

  return cardContent;
};
