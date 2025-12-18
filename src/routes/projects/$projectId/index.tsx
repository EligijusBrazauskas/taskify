import { tasksQueryOptions } from "@/api/queries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$projectId/")({
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(tasksQueryOptions);
  },
  validateSearch: (search: { taskId?: number }) => search,
});
