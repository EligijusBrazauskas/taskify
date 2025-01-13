import { Flex } from "@/components/base";
import { projects } from "@/mocks";
import { ProjectStatus } from "@/modules/projects/interfaces";
import { Header } from "@/modules/projects/pages/project/components/board/components/column";
import { Project } from "@/modules/projects/pages/projects/components/board/components/column";

interface ColumnProps {
  status: ProjectStatus;
}

export const Column = ({ status }: ColumnProps) => (
  <Flex className="h-full w-full @2xl:min-w-60 min-w-48 max-w-80 flex-col pt-4">
    <Header status={status} />
    <Flex className="flex-col gap-4 py-4">
      {projects
        .filter((project) => project.statusId === status.id)
        .map((project) => (
          <Project key={project.id} project={project} />
        ))}
    </Flex>
  </Flex>
);
