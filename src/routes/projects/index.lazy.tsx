import { ProjectsPage } from "@/modules/projects/pages/projects";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects/")({
  component: () => <ProjectsPage />,
});
