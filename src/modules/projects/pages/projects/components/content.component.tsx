import { Flex } from "@/components/base";
import { TabsContent } from "@/components/ui/tabs";
import { Project } from "@/modules/projects/interfaces";
import { Board } from "@/modules/projects/pages/projects/components";

interface ContentProps {
  projects: Project[];
}

export const Content = ({ projects }: ContentProps) => (
  <Flex className="h-full overflow-hidden">
    <TabsContent value="board" className="overflow-hidden">
      <Board projects={projects} />
    </TabsContent>
    <TabsContent value="list">
      <Flex>List</Flex>
    </TabsContent>
    <TabsContent value="timeline">
      <Flex>Timeline</Flex>
    </TabsContent>
  </Flex>
);
