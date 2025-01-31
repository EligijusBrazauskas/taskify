import { Flex } from "@/components/base";
import { Content, Filters } from "@/components/composite/shared";
import { Dialog } from "@/components/ui/dialog";
import { Tabs } from "@/components/ui/tabs";
import { Modal } from "@/modules/tasks/pages/tasks/components/modal";

export const TasksPage = () => (
  <Flex className="h-full flex-col overflow-hidden">
    <Tabs defaultValue="board" className="flex h-full flex-col overflow-hidden">
      <Filters />
      <Dialog>
        <Content />
        <Modal />
      </Dialog>
    </Tabs>
  </Flex>
);
