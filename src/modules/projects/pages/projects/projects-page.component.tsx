import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { Divider, Flex, Typography } from "@/modules/_shared/components/base";
import { Filters } from "@/modules/_shared/components/filters";
import {
  NavBar,
  NavBarActions,
  NavBarBreadcrumbs,
} from "@/modules/_shared/components/navbar";
import {
  projectsActions,
  projectsBreadcrumbs,
} from "@/modules/_shared/components/navbar/defaults";
import { useContainerQuery } from "@/modules/_shared/hooks";
import { useProjectsSuspenseQuery } from "@/modules/projects/api/queries";
import { Content } from "@/modules/projects/pages/projects/components";

export const ProjectsPage = () => {
  const [isMd, is3Xl] = useContainerQuery(["md", "3xl"]);
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
        <Filters
          Action={
            isMd && (
              <Button>
                <Plus />
                {is3Xl && <Typography>New Project</Typography>}
              </Button>
            )
          }
        />
        <Content projects={projects} />
      </Tabs>
    </Flex>
  );
};
