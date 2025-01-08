import { Flex } from "@/components/base";
import { TabsContent } from "@/components/ui/tabs";
import { Board } from "@/pages/project/components/board";

export const Content = () => (
  <Flex className="px-6 pt-4 pb-2">
    <TabsContent value="board" className="w-full overflow-auto">
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
