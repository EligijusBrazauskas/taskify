import { formatDistance } from "date-fns";
import { Ellipsis, SmilePlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/modules/_shared/components";
import { Flex, Typography } from "@/modules/_shared/components/base";
import { joinStrings } from "@/modules/_shared/helpers";
import { TaskComment } from "@/modules/tasks/interfaces";

interface TaskModalCommentsTabContentProps {
  comments?: TaskComment[];
}

export const TaskModalCommentsTabContent = ({
  comments,
}: TaskModalCommentsTabContentProps) => {
  return (
    <Flex className="w-full flex-1 flex-col gap-2">
      <Flex className="w-full justify-between">
        <Typography>Comments</Typography>
        <Button variant="ghost">
          <Ellipsis size={18} />
        </Button>
      </Flex>
      {!comments?.length && (
        <Typography className="text-secondary">No comments</Typography>
      )}
      {!!comments?.length && (
        <Flex className="flex-1 flex-col gap-4">
          {comments.map((comment) => (
            <Flex key={comment.id} className="group/comment gap-2">
              <Avatar
                avatarUrl={comment.author?.avatarUrl}
                className="self-start"
              />
              <Flex className="flex-col gap-1">
                <Flex className="items-center justify-between gap-1">
                  <Flex className="gap-1">
                    <Typography className="font-semibold">
                      {joinStrings([
                        comment.author?.name,
                        comment.author?.lastname,
                      ])}
                    </Typography>
                    <Typography className="text-secondary">&#x2022;</Typography>
                    <Typography className="text-secondary">
                      {formatDistance(comment.postedAt, new Date())}
                    </Typography>
                  </Flex>
                  <Flex className="gap-1 opacity-0 transition group-hover/comment:opacity-100">
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <SmilePlus size={16} />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Ellipsis size={16} />
                    </Button>
                  </Flex>
                </Flex>
                <Typography>{comment.description}</Typography>
                <Flex className="items-center gap-1">
                  {comment.reactions?.map((reaction) => (
                    <Badge
                      variant="secondary"
                      className="cursor-pointer gap-1 rounded-lg"
                      key={reaction.id}
                    >
                      <Typography>{reaction.reaction}</Typography>
                      <Typography className="text-secondary">
                        {reaction.count}
                      </Typography>
                    </Badge>
                  ))}
                  {!!comment.reactions?.length && (
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <SmilePlus size={16} />
                    </Button>
                  )}
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};
