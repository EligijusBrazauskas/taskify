import { createLazyFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import { TasksPage } from "@/modules/tasks/pages/tasks";

export const Route = createLazyFileRoute("/tasks/")({
  component: () => (
    //TODO: replace with proper fallback
    <Suspense fallback="Loading">
      <TasksPage />
    </Suspense>
  ),
});
