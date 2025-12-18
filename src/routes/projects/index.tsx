import { projectsQueryOptions } from "@/api/queries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(projectsQueryOptions);
  },
});
