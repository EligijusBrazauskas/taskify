import { Divider, Flex } from "@/components/base";
import { Tabs } from "@/components/ui/tabs";
import { Filters } from "@/modules/_shared/components";
import {
  NavBar,
  NavBarActions,
  NavBarBreadcrumbs,
  projectsActions,
  projectsBreadcrumbs,
} from "@/modules/_shared/components/navbar";
import { useProjectsSuspenseQuery } from "@/modules/projects/api/queries";
import { Content } from "@/modules/projects/pages/projects/components";

export const ProjectsPage = () => {
  //TODO: add user specific created projects when user login is ready
  const {
    data: { data: projects },
  } = useProjectsSuspenseQuery();

  return (
    <Flex className="h-full w-full flex-col overflow-hidden">
      <NavBar
        BreadCrumbs={<NavBarBreadcrumbs breadcrumbs={projectsBreadcrumbs} />}
        Actions={<NavBarActions actions={projectsActions} />}
      />
      <Divider orientation="horizontal" />
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
