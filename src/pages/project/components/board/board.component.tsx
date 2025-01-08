import { Flex } from "@/components/base";
import { Column } from "@/pages/project/components/board";

export const Board = () => {
  const statuses = [
    "todo",
    "inProgress",
    "inReview",
    "readyForQA",
    "inQA",
    "Done",
  ];

  return (
    <Flex className="w-full gap-4">
      {statuses.map((status, index) => (
        <Column key={index} status={status} />
      ))}
    </Flex>
  );
};
