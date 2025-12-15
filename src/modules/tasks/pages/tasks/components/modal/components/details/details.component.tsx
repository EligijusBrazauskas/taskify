import { Flex } from "@/components/base";
import { DialogTitle } from "@/components/ui/dialog";
import { DetailsTabs } from "@/modules/tasks/pages/tasks/components/modal/components/details/components/details-tabs.component";
import { Summary } from "@/modules/tasks/pages/tasks/components/modal/components/details/components/summary";

export const Details = () => (
  <Flex className="flex-col items-start gap-4 overflow-auto pt-4">
    <DialogTitle className="px-6">Task 1</DialogTitle>
    <Summary />
    <DetailsTabs />
  </Flex>
);
