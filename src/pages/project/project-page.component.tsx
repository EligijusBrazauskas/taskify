import { Flex } from "@/components/base";
import { Tabs } from "@/components/ui/tabs";
import { Content, Filters, Header } from "@/pages/project";

export const ProjectPage = () => {
  return (
    <Flex className="flex-col">
      <Header />
      <Tabs defaultValue="board">
        <Filters />
        <Content />
      </Tabs>
    </Flex>
  );
};
