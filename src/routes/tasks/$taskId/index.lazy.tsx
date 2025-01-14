import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/tasks/$taskId/")({
  component: () => <div>Task</div>,
});
