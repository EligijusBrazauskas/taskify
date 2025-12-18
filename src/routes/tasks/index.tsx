import { tasksQueryOptions } from "@/api/queries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/")({
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(tasksQueryOptions);
  },
  validateSearch: (search: { taskId?: number }) => search,
});
