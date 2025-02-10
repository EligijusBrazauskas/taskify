import { Divider, Flex } from "@/components/base";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const DetailsTabs = () => (
  <Tabs
    defaultValue="subtasks"
    className="flex h-full w-full flex-col items-start"
  >
    <TabsList className="my-2 flex w-full justify-start px-6">
      <TabsTrigger value="subtasks">Subtasks</TabsTrigger>
      <TabsTrigger value="comments">Comments</TabsTrigger>
      <TabsTrigger value="activity">Activity</TabsTrigger>
    </TabsList>
    <Divider orientation="horizontal" />
    <Flex className="h-full w-full items-start px-6 py-4">
      <TabsContent value="subtasks">
        <Flex className="w-full">Subtasks</Flex>
      </TabsContent>
      <TabsContent value="comments">
        <Flex>Comments</Flex>
      </TabsContent>
      <TabsContent value="activity">
        <Flex>Activity</Flex>
      </TabsContent>
    </Flex>
  </Tabs>
);
