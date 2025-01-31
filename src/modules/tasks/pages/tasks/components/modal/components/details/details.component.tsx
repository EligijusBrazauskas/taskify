import { Flex } from "@/components/base";
import { DialogTitle } from "@/components/ui/dialog";
import { Summary } from "@/modules/tasks/pages/tasks/components/modal/components/details/components/summary";

export const Details = () => (
  <Flex className="flex-col items-start gap-4 px-6 pt-4">
    <DialogTitle>Task 1</DialogTitle>
    <Summary />
  </Flex>
);
