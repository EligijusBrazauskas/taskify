import { Link } from "@tanstack/react-router";
import { sortBy } from "lodash";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Avatar } from "@/modules/_shared/components";
import { Divider, Flex } from "@/modules/_shared/components/base";
import {
  Board,
  BoardColumn,
  BoardColumnHeader,
  BoardColumnItem,
} from "@/modules/_shared/components/board";
import { Filters } from "@/modules/_shared/components/filters";
import { NavBar } from "@/modules/_shared/components/navbar";
import { acronym } from "@/modules/_shared/helpers";
import { useContainerQuery } from "@/modules/_shared/hooks";
import {
  useProjectStatusesQuery,
  useProjectsSuspenseQuery,
} from "@/modules/projects/api/queries";

export const ProjectsPage = () => {
  const [isMd, is3Xl] = useContainerQuery(["md", "3xl"]);

  //TODO: add user specific created projects when user login is ready
  const {
    data: { data: projects },
  } = useProjectsSuspenseQuery();
  const { data: projectStatuses } = useProjectStatusesQuery();

  const sortedStatuses = sortBy(projectStatuses, "order");

  return (
    <Flex className="h-full w-full flex-col overflow-hidden">
      <NavBar />
      <Divider orientation="horizontal" />
      <Tabs
        defaultValue="board"
        className="flex h-full flex-col overflow-hidden"
      >
        <Filters />
        <Flex className="h-full overflow-hidden">
          <TabsContent value="board" className="overflow-hidden">
            <Board>
              {sortedStatuses.map((status) => {
                const filteredProjects = projects.filter(
                  (project) => project.statusId === status.id,
                );

                return (
                  <BoardColumn
                    key={status.id}
                    Header={
                      <BoardColumnHeader
                        status={status}
                        count={filteredProjects.length}
                      />
                    }
                    Content={filteredProjects.map((project) => (
                      <Link
                        key={project.id}
                        to="/projects/$projectId"
                        params={{ projectId: String(project.id) }}
                      >
                        <BoardColumnItem
                          title={project.title}
                          description={project.description}
                          priority={project.priority}
                          Avatar={
                            <Avatar
                              avatarUrl={project.owner?.avatarUrl}
                              fallback={acronym([
                                project.owner?.name,
                                project.owner?.lastname,
                              ])}
                            />
                          }
                        />
                      </Link>
                    ))}
                  />
                );
              })}
            </Board>
          </TabsContent>
          <TabsContent value="list">
            <Flex>List</Flex>
          </TabsContent>
          <TabsContent value="timeline">
            <Flex>Timeline</Flex>
          </TabsContent>
        </Flex>
      </Tabs>
    </Flex>
  );
};
