import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects/$projectId/")({
  component: () => <div>Project</div>,
});
