import { Flex } from "@/components/base";
import { Tabs } from "@/components/ui/tabs";
import { Content, Filters, Header } from "@/pages/project";

export const ProjectPage = () => {
  return (
    <Flex className="h-full flex-col">
      <Header />
      <Tabs defaultValue="board" className="flex h-full flex-col">
        <Filters />
        <Content />
      </Tabs>
    </Flex>
  );
};
