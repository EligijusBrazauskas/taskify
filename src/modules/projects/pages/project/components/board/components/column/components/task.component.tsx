import { Divider, Flex, Typography } from "@/components/base";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { taskComments } from "@/mocks";
import {
  getPriorityColorScheme,
  getPriorityIcon,
  getTypeColorScheme,
  getTypeIcon,
} from "@/modules/projects/helpers";
import { Task as ITask } from "@/modules/projects/interfaces";
import { Ellipsis, MessageSquare } from "lucide-react";

interface TaskProps {
  task: ITask;
}

export const Task = ({ task }: TaskProps) => (
  <Card
    className="cursor-pointer transition-all duration-200 hover:bg-secondary-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    tabIndex={0}
  >
    <CardHeader>
      <Flex className="w-full justify-between">
        <Flex className="gap-2">
          {task.type && (
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
          {task.priority && (
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
        <Button variant="ghost" className="hover:bg-secondary-light">
          <Ellipsis />
        </Button>
      </Flex>
    </CardHeader>
    <CardContent>
      <CardTitle className="">
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
        <Button variant="link" size="xs">
          <Avatar className="size-6">
            <AvatarFallback className="bg-secondary-light text-primary text-sm">
              EB
            </AvatarFallback>
          </Avatar>
        </Button>
        {taskComments.length && (
          <Button
            variant="ghost"
            size="xs"
            className="gap-1 hover:bg-secondary-light"
          >
            <MessageSquare size={20} className="stroke-0.25" />
            {taskComments.length}
          </Button>
        )}
      </Flex>
    </CardFooter>
  </Card>
);
