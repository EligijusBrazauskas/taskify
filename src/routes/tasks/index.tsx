import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/")({
  loader: () => true,
  validateSearch: (search: { taskId?: number }) => search,
});
