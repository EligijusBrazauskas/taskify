import { ReactNode } from "react";
import { Flex } from "@/modules/_shared/components/base";

interface BoardColumnProps {
  Header?: ReactNode;
  Content?: ReactNode;
}

export const BoardColumn = ({ Header, Content }: BoardColumnProps) => {
  return (
    <Flex className="h-full w-full @2xl:min-w-60 min-w-48 max-w-80 flex-col pt-4">
      {Header}
      <Flex className="flex-col gap-4 py-4">{Content}</Flex>
    </Flex>
  );
};
