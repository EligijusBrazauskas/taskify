import { useProjectsQuery } from "@/api/queries";
import { Flex } from "@/components/base";
import { Filters } from "@/components/composite/page";
import { Tabs } from "@/components/ui/tabs";
import { Content } from "@/modules/projects/pages/projects/components";

export const ProjectsPage = () => {
  //TODO: add user specific created projects when user login is ready
  const { data: projects, isLoading } = useProjectsQuery();

  return (
    <Flex className="h-full flex-col overflow-hidden">
      <Tabs
        defaultValue="board"
        className="flex h-full flex-col overflow-hidden"
      >
        <Filters />
        <Content projects={projects} />
      </Tabs>
    </Flex>
  );
};
