import { Flex } from "@/components/base";
import { Content, Filters } from "@/components/composite/shared";
import { Tabs } from "@/components/ui/tabs";
import { Header } from "@/modules/projects/pages/project";

export const ProjectPage = () => (
  <Flex className="h-full flex-col overflow-hidden">
    <Header />
    <Tabs defaultValue="board" className="flex h-full flex-col overflow-hidden">
      <Filters />
      <Content />
    </Tabs>
  </Flex>
);
