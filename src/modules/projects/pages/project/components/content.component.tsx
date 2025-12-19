import { TabsContent } from "@/components/ui/tabs";
import { Flex } from "@/modules/_shared/components/base";
import { Board } from "@/modules/projects/pages/project/components";
import { Task } from "@/modules/tasks/interfaces";

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
