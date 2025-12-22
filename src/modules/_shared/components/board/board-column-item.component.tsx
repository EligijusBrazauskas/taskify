import { Ellipsis, MessageSquare, Paperclip } from "lucide-react";
import { forwardRef, HTMLAttributes, MouseEvent, ReactNode } from "react";
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
import { cn } from "@/lib/utils";
import { Divider, Flex, Typography } from "@/modules/_shared/components/base";
import {
  priorityColorSchemeMap,
  priorityIconMap,
} from "@/modules/_shared/defaults";
import { Priority } from "@/modules/_shared/types";
import {
  taskTypeColorSchemeMap,
  taskTypeIconMap,
} from "@/modules/tasks/defaults";
import { TaskType } from "@/modules/tasks/interfaces";

interface BoardColumnItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  type?: TaskType;
  priority?: Priority;
  description?: string;
  commentsCount?: number;
  attachmentsCount?: number;
  onMoreClick?: () => void;
  onAvatarClick?: () => void;
  onCommentsClick?: () => void;
  onAttachmentsClick?: () => void;
  Avatar?: ReactNode;
}

export const BoardColumnItem = forwardRef<HTMLDivElement, BoardColumnItemProps>(
  (
    {
      title,
      description,
      priority,
      type,
      commentsCount,
      attachmentsCount,
      onMoreClick,
      onAvatarClick,
      onCommentsClick,
      onAttachmentsClick,
      Avatar,
      className,
      ...rest
    },
    ref,
  ) => {
    const handleOnMoreClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      onMoreClick?.();
    };

    const handleOnAvatarClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      onAvatarClick?.();
    };

    const handleOnCommentsClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      onCommentsClick?.();
    };

    const handleOnAttachmentsClick = (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      onAttachmentsClick?.();
    };

    return (
      <Card
        ref={ref}
        tabIndex={0}
        className={cn(
          "cursor-pointer transition-all duration-200 hover:bg-secondary-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className,
        )}
        {...rest}
      >
        <CardHeader>
          <Flex className="w-full justify-between">
            <Flex className="flex-wrap gap-2">
              {type && (
                <Badge
                  colorScheme={taskTypeColorSchemeMap[type]}
                  className="self-center"
                >
                  {taskTypeIconMap[type]}
                  <Typography className="first-letter:uppercase">
                    {type}
                  </Typography>
                </Badge>
              )}
              {priority && (
                <Badge
                  colorScheme={priorityColorSchemeMap[priority]}
                  className="self-center"
                >
                  {priorityIconMap[priority]}
                  <Typography className="first-letter:uppercase">
                    {priority}
                  </Typography>
                </Badge>
              )}
            </Flex>
            <Button
              variant="ghost"
              className="hover:bg-secondary-light"
              onClick={handleOnMoreClick}
            >
              <Ellipsis size={18} />
            </Button>
          </Flex>
        </CardHeader>
        <CardContent>
          <CardTitle>
            <Typography className="line-clamp-2">{title}</Typography>
          </CardTitle>
          {description && (
            <CardDescription>
              <Typography className="line-clamp-3">{description}</Typography>
            </CardDescription>
          )}
        </CardContent>
        <Divider orientation="horizontal" className="my-2" />
        <CardFooter className="flex justify-between">
          {Avatar}
          <Flex className="gap-2">
            {!!attachmentsCount && (
              <Button
                variant="ghost"
                className="gap-1 px-1 hover:bg-secondary-light"
                onClick={handleOnAttachmentsClick}
              >
                <Paperclip size={18} />
                {attachmentsCount}
              </Button>
            )}
            {!!commentsCount && (
              <Button
                variant="ghost"
                className="gap-1 px-1 hover:bg-secondary-light"
                onClick={handleOnCommentsClick}
              >
                <MessageSquare size={18} />
                {commentsCount}
              </Button>
            )}
          </Flex>
        </CardFooter>
      </Card>
    );
  },
);
