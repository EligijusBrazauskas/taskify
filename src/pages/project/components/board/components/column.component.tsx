import { Flex } from "@/components/base";

interface ColumnProps {
  status: string;
}

export const Column = ({ status }: ColumnProps) => (
  <Flex className="w-[300px] min-w-[200px] flex-col gap-4">
    <Flex className="min-h-30 items-center justify-start rounded-md bg-secondary-body px-2 text-sm">
      {status}
    </Flex>
    <Flex className="h-full bg-red-200">Tickets</Flex>
  </Flex>
);
