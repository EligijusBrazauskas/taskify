import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/tasks/$taskId/")({
  loader: () => true,
});
