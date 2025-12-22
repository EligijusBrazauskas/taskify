import { projects } from "@/mocks";
import { users } from "@/mocks/users.mock";
import { Project } from "@/modules/projects/interfaces";

export const projectsWithOwners: Project[] = projects.map((project) => ({
  ...project,
  owner: users.find((user) => user.id === project.ownerId),
}));
