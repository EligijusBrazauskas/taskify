import { ProjectsPage } from "@/modules/projects/pages/projects";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

export const Route = createLazyFileRoute("/projects/")({
  component: () => (
    //TODO: replace with proper fallback
    <Suspense fallback="Loading">
      <ProjectsPage />
    </Suspense>
  ),
});
