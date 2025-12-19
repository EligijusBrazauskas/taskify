import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { ProjectsPage } from "@/modules/projects/pages/projects";

export const Route = createLazyFileRoute("/projects/")({
  component: () => (
    //TODO: replace with proper fallback
    <Suspense fallback="Loading">
      <ProjectsPage />
    </Suspense>
  ),
});
