import { Flex } from "@/components/base";
import { Board } from "@/components/composite/shared";
import { TabsContent } from "@/components/ui/tabs";

export const Content = () => (
  <Flex className="h-full overflow-hidden">
    <TabsContent value="board" className="w-full overflow-hidden">
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
