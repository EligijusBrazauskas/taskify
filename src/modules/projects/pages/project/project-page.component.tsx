import { Flex } from "@/components/base";
import { Tabs } from "@/components/ui/tabs";
import { Content, Filters, Header } from "@/modules/projects/pages/project";

export const ProjectPage = () => (
  <Flex className="h-full flex-col overflow-hidden">
    <Header />
    <Tabs defaultValue="board" className="flex h-full flex-col overflow-hidden">
      <Filters />
      <Content />
    </Tabs>
  </Flex>
);
