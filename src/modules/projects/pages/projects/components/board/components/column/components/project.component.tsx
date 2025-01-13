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
import { projectComments } from "@/mocks";
import {
  getPriorityColorScheme,
  getPriorityIcon,
} from "@/modules/projects/helpers";
import { Project as IProject } from "@/modules/projects/interfaces";
import { Ellipsis, MessageSquare } from "lucide-react";

interface TaskProps {
  project: IProject;
}

export const Project = ({ project }: TaskProps) => (
  <Card
    className="cursor-pointer transition-all duration-200 hover:bg-secondary-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    tabIndex={0}
  >
    <CardHeader>
      <Flex className="w-full justify-between">
        <Flex className="gap-2">
          {project.priority && (
            <Badge
              colorScheme={getPriorityColorScheme(project.priority)}
              className="self-center"
            >
              {getPriorityIcon(project.priority)}
              <Typography className="first-letter:uppercase">
                {project.priority}
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
        <Typography className="line-clamp-2">{project.title}</Typography>
      </CardTitle>
      {project.description && (
        <CardDescription>
          <Typography className="line-clamp-3">
            {project.description}
          </Typography>
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
        {projectComments.length && (
          <Button
            variant="ghost"
            size="xs"
            className="gap-1 hover:bg-secondary-light"
          >
            <MessageSquare size={20} className="stroke-0.25" />
            {projectComments.length}
          </Button>
        )}
      </Flex>
    </CardFooter>
  </Card>
);
