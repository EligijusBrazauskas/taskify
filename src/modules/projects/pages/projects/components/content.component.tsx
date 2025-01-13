import { Flex } from "@/components/base";
import { TabsContent } from "@/components/ui/tabs";
import { Board } from "@/modules/projects/pages/projects/components/board";

export const Content = () => (
  <Flex className="h-full overflow-hidden">
    <TabsContent value="board" className="overflow-hidden">
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
