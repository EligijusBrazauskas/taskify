import { projectsQueryOptions } from "@/modules/projects/api/queries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(projectsQueryOptions);
  },
});
