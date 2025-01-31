import { Flex, Typography } from "@/components/base";
import {
  AvatarButton,
  Badge,
  StatusLabel,
} from "@/components/composite/shared";
import { statuses, tasks } from "@/mocks";
import { SummaryItem } from "@/modules/tasks/pages/tasks/components/modal/components/details/components/summary/components/summary-item.component";
import { format } from "date-fns";
import {
  Calendar,
  CircleAlert,
  CircleDot,
  CircleUserRound,
} from "lucide-react";

export const Summary = () => {
  const { dueDate, priority } = tasks[1];

  const handleOnAvatarClick = () => {};

  return (
    <Flex className="w-[60%] flex-col justify-between gap-4">
      <SummaryItem label="Status" icon={<CircleDot size={16} />}>
        <StatusLabel status={statuses[1]} />
      </SummaryItem>
      {priority && (
        <SummaryItem label="Priority" icon={<CircleAlert size={16} />}>
          <Badge property={priority} />
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
    </Flex>
  );
};
