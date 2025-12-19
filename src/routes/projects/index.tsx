import { createFileRoute } from "@tanstack/react-router";
import { projectsQueryOptions } from "@/modules/projects/api/queries";

export const Route = createFileRoute("/projects/")({
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(projectsQueryOptions);
  },
});
