import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$projectId/")({
  loader: () => true,
  validateSearch: (search: { taskId?: number }) => search,
});
