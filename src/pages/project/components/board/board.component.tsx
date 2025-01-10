import { Flex } from "@/components/base";
import { Column } from "@/pages/project/components/board";

export const Board = () => {
  const statuses = [
    "todo",
    "inProgress",
    "inReview",
    "readyForQA",
    "inQA",
    "done",
  ];

  return (
    <Flex className="gap-4 overflow-x-auto px-6">
      {statuses.map((status, index) => (
        <Column key={index} status={status} />
      ))}
    </Flex>
  );
};
