import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Divider, Flex } from "@/modules/_shared/components/base";
import { TaskModalCommentsTab } from "@/modules/tasks/components/task-modal/task-modal-comments-tab.component";
import { TaskModalCommentsTabContent } from "@/modules/tasks/components/task-modal/task-modal-comments-tab-content.component";
import { TaskComment } from "@/modules/tasks/interfaces";

interface TaskModalDetailsTabsProps {
  comments?: TaskComment[];
}

export const TaskModalDetailsTabs = ({
  comments,
}: TaskModalDetailsTabsProps) => (
  <Tabs defaultValue="comments" className="flex w-full flex-col">
    <TabsList className="my-2 w-full justify-start px-6">
      <TabsTrigger value="subtasks">Subtasks</TabsTrigger>
      <TabsTrigger value="comments">
        <TaskModalCommentsTab comments={comments} />
      </TabsTrigger>
      <TabsTrigger value="activity">Activity</TabsTrigger>
    </TabsList>
    <Divider orientation="horizontal" />
    <Flex className="w-full px-6 py-4">
      <TabsContent value="subtasks" asChild>
        Subtasks
      </TabsContent>
      <TabsContent value="comments" asChild>
        <TaskModalCommentsTabContent comments={comments} />
      </TabsContent>
      <TabsContent value="activity" asChild>
        Activity
      </TabsContent>
    </Flex>
  </Tabs>
);
