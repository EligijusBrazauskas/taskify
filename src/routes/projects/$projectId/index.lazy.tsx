import { ProjectPage } from "@/pages/project";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects/$projectId/")({
  component: () => <ProjectPage />,
});
