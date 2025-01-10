import { Flex } from "@/components/base";
import { TabsContent } from "@/components/ui/tabs";
import { Board } from "@/pages/project/components/board";

export const Content = () => (
  <Flex className="h-full py-4">
    <TabsContent value="board" className="overflow-x-scroll">
      <Board />
    </TabsContent>
    <TabsContent value="list">
      <Flex>List</Flex>
    </TabsContent>
    <TabsContent value="timeline">
      <Flex>TimeLine</Flex>
    </TabsContent>
  </Flex>
);
