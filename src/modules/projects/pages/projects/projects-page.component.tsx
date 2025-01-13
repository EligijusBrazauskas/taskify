import { Flex } from "@/components/base";
import { Tabs } from "@/components/ui/tabs";
import { Content, Filters } from "@/modules/projects/pages/projects";

export const ProjectsPage = () => (
  <Flex className="h-full flex-col overflow-hidden">
    <Tabs defaultValue="board" className="flex h-full flex-col overflow-hidden">
      <Filters />
      <Content />
    </Tabs>
  </Flex>
);
