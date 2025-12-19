import { Flex } from "@/modules/_shared/components/base";
import { Status } from "@/modules/_shared/interfaces";
import { Project } from "@/modules/projects/interfaces";
import {
  ColumnHeader,
  ColumnItem,
} from "@/modules/projects/pages/projects/components";

interface ColumnProps {
  status: Status;
  projects: Project[];
}

export const Column = ({ status, projects }: ColumnProps) => {
  //TODO: for now filtering all projects to get specific ones, implement requests to get projects by status
  const filteredProjects = projects.filter(
    (project) => project.statusId === status.id,
  );

  return (
    <Flex className="h-full w-full @2xl:min-w-60 min-w-48 max-w-80 flex-col pt-4">
      <ColumnHeader status={status} projects={filteredProjects} />
      <Flex className="flex-col gap-4 py-4">
        {filteredProjects.map((project) => (
          <ColumnItem key={project.id} project={project} />
        ))}
      </Flex>
    </Flex>
  );
};
