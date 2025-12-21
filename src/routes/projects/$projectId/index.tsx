import { createFileRoute } from "@tanstack/react-router";
import { tasksQueryOptions } from "@/modules/tasks/api/queries";

interface SearchParams {
  taskId?: number;
}

export const Route = createFileRoute("/projects/$projectId/")({
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(tasksQueryOptions);
  },
  validateSearch: (search: SearchParams) => search,
});
