import { Flex, Typography } from "@/components/base";
import { StatusLabel } from "@/components/composite/board";
import { AvatarButton } from "@/components/composite/shared";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription } from "@/components/ui/card";
import { getPriorityColorScheme, getPriorityIcon } from "@/helpers";
import { statuses, tasks } from "@/mocks";
import { getTypeColorScheme, getTypeIcon } from "@/modules/tasks/helpers";
import { SummaryItem } from "@/modules/tasks/pages/tasks/components/modal/components/details/components/summary/components/summary-item.component";
import { format } from "date-fns";
import {
  Calendar,
  CircleDot,
  CircleUserRound,
  NotepadText,
  TagIcon,
} from "lucide-react";

export const Summary = () => {
  const { dueDate, priority, type, description } = tasks[2];
  const handleOnAvatarClick = () => {};

  return (
    <Flex className="w-full flex-col justify-between gap-4 px-6">
      <SummaryItem label="Status" icon={<CircleDot size={16} />}>
        <StatusLabel status={statuses[1]} />
      </SummaryItem>
      {(priority || type) && (
        <SummaryItem label="Tags" icon={<TagIcon size={16} />}>
          <Flex className="flex-wrap gap-2">
            {type && (
              <Badge
                colorScheme={getTypeColorScheme(type)}
                className="self-center"
              >
                {getTypeIcon(type)}
                <Typography className="first-letter:uppercase">
                  {type}
                </Typography>
              </Badge>
            )}
            {priority && (
              <Badge
                colorScheme={getPriorityColorScheme(priority)}
                className="self-center"
              >
                {getPriorityIcon(priority)}
                <Typography className="first-letter:uppercase">
                  {priority}
                </Typography>
              </Badge>
            )}
          </Flex>
        </SummaryItem>
      )}
      <SummaryItem label="Assignee" icon={<CircleUserRound size={16} />}>
        <AvatarButton onClick={handleOnAvatarClick} />
      </SummaryItem>
      {dueDate && (
        <SummaryItem label="Date due" icon={<Calendar size={16} />}>
          <Typography>{format(dueDate, "d MMMM yyyy")}</Typography>
        </SummaryItem>
      )}
      {description && (
        <SummaryItem label="Description" icon={<NotepadText size={16} />}>
          <Card>
            <CardDescription className="text-primary">
              {description}
            </CardDescription>
          </Card>
        </SummaryItem>
      )}
    </Flex>
  );
};
