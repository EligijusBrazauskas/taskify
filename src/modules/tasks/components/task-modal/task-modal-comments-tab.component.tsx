import { Badge } from "@/components/ui/badge";
import { Typography } from "@/modules/_shared/components/base";
import { TaskComment } from "@/modules/tasks/interfaces";

interface TaskModalCommentsTabProps {
  comments?: TaskComment[];
}

export const TaskModalCommentsTab = ({
  comments,
}: TaskModalCommentsTabProps) => {
  return (
    <Typography className="flex gap-1">
      Comments
      {!!comments?.length && (
        <Badge colorScheme="violet" className="self-center">
          {comments?.length}
        </Badge>
      )}
    </Typography>
  );
};
