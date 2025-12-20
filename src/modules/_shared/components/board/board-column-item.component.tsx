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
import { Priority } from "@/modules/_shared/types";

interface BoardColumnItemProps {
  title: string;
  priority?: Priority;
  description?: string;
  onMoreClick?: () => void;
  onAvatarClick?: () => void;
}

export const BoardColumnItem = ({
  title,
  description,
  priority,
  onMoreClick,
  onAvatarClick,
}: BoardColumnItemProps) => {
  const handleOnMoreClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    onMoreClick?.();
  };

  const handleOnAvatarClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    onAvatarClick?.();
  };

  return (
    <Card className="cursor-pointer transition-all duration-200 hover:bg-secondary-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <CardHeader>
        <Flex className="w-full justify-between">
          <Flex className="flex-wrap gap-2">
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
            className="self-start hover:bg-secondary-light"
            onClick={handleOnMoreClick}
          >
            <Ellipsis />
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
      <CardFooter>
        <Flex className="w-full justify-between">
          <AvatarButton onClick={handleOnAvatarClick} />
        </Flex>
      </CardFooter>
    </Card>
  );
};
