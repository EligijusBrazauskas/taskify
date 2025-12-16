import { Flex } from "@/components/base";
import { TabsContent } from "@/components/ui/tabs";
import { Task } from "@/modules/tasks/interfaces";
import { Board } from "@/modules/tasks/pages/tasks/components";

interface ContentProps {
  tasks: Task[];
}

export const Content = ({ tasks }: ContentProps) => (
  <Flex className="h-full overflow-hidden">
    <TabsContent value="board" className="overflow-hidden">
      <Board tasks={tasks} />
    </TabsContent>
    <TabsContent value="list">
      <Flex>List</Flex>
    </TabsContent>
    <TabsContent value="timeline">
      <Flex>Timeline</Flex>
    </TabsContent>
  </Flex>
);
