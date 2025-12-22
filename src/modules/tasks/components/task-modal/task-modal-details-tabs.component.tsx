import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Divider, Flex } from "@/modules/_shared/components/base";

interface TaskModalDetailsTabsProps {
  Subtasks?: ReactNode;
  CommentsTab?: ReactNode;
  CommentsTabContent?: ReactNode;
  Activity?: ReactNode;
}

export const TaskModalDetailsTabs = ({
  Subtasks,
  CommentsTab,
  CommentsTabContent,
  Activity,
}: TaskModalDetailsTabsProps) => (
  <Tabs
    defaultValue="subtasks"
    className="flex h-full w-full flex-col items-start"
  >
    <TabsList className="my-2 flex w-full justify-start px-6">
      <TabsTrigger value="subtasks">Subtasks</TabsTrigger>
      <TabsTrigger value="comments">{CommentsTab}</TabsTrigger>
      <TabsTrigger value="activity">Activity</TabsTrigger>
    </TabsList>
    <Divider orientation="horizontal" />
    <Flex className="h-full w-full px-6 py-4">
      <TabsContent value="subtasks" asChild>
        {Subtasks}
      </TabsContent>
      <TabsContent value="comments" asChild>
        {CommentsTabContent}
      </TabsContent>
      <TabsContent value="activity" asChild>
        {Activity}
      </TabsContent>
    </Flex>
  </Tabs>
);
