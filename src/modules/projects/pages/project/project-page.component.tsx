import { Flex } from "@/components/base";
import { Content, Filters } from "@/components/composite/shared";
import { Dialog } from "@/components/ui/dialog";
import { Tabs } from "@/components/ui/tabs";
import { Header } from "@/modules/projects/pages/project";
import { Modal } from "@/modules/tasks/pages/tasks/components/modal";

export const ProjectPage = () => (
  <Flex className="h-full flex-col overflow-hidden">
    <Header />
    <Tabs defaultValue="board" className="flex h-full flex-col overflow-hidden">
      <Filters />
      <Dialog>
        <Content />
        <Modal />
      </Dialog>
    </Tabs>
  </Flex>
);
