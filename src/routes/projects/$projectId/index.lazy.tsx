import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { ProjectPage } from "@/modules/projects/pages/project";

export const Route = createLazyFileRoute("/projects/$projectId/")({
  component: () => (
    //TODO: replace with proper fallback
    <Suspense fallback="Loading">
      <ProjectPage />
    </Suspense>
  ),
});
