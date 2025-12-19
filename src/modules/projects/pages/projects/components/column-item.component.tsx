import { Link } from "@tanstack/react-router";
import { Ellipsis } from "lucide-react";
import { MouseEvent } from "react";
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
import { AvatarButton } from "@/modules/_shared/components";
import { Divider, Flex, Typography } from "@/modules/_shared/components/base";
import {
  priorityColorSchemeMap,
  priorityIconMap,
} from "@/modules/_shared/defaults";
import { Project } from "@/modules/projects/interfaces";

interface ColumnItem {
  project: Project;
}

export const ColumnItem = ({ project }: ColumnItem) => {
  const handleOnMoreClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  const handleOnAvatarClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
  };

  return (
    <Link to="/projects/$projectId" params={{ projectId: String(project.id) }}>
      <Card
        className="cursor-pointer transition-all duration-200 hover:bg-secondary-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        tabIndex={0}
      >
        <CardHeader>
          <Flex className="w-full justify-between">
            <Flex className="flex-wrap gap-2">
              {project.priority && (
                <Badge
                  colorScheme={priorityColorSchemeMap[project.priority]}
                  className="self-center"
                >
                  {priorityIconMap[project.priority]}
                  <Typography className="first-letter:uppercase">
                    {project.priority}
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
            <AvatarButton onClick={handleOnAvatarClick} />
          </Flex>
        </CardFooter>
      </Card>
    </Link>
  );
};
