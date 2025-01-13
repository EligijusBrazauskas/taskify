import { ProjectPage } from "@/modules/projects/pages/project";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects/$projectId/")({
  component: () => <ProjectPage />,
});
