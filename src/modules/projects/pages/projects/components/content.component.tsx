import { TabsContent } from "@/components/ui/tabs";
import { Flex } from "@/modules/_shared/components/base";
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
