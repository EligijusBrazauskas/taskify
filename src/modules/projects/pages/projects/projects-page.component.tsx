import { Flex } from "@/components/base";
import { Content, Filters } from "@/components/composite/shared";
import { Tabs } from "@/components/ui/tabs";

export const ProjectsPage = () => (
  <Flex className="h-full flex-col overflow-hidden">
    <Tabs defaultValue="board" className="flex h-full flex-col overflow-hidden">
      <Filters />
      <Content />
    </Tabs>
  </Flex>
);
