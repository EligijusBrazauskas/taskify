import { ProjectPage } from "@/modules/projects/pages/project";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/projects/$projectId/")({
  component: () => (
    //TODO: replace with proper fallback
    <Suspense fallback="Loading">
      <ProjectPage />
    </Suspense>
  ),
});
