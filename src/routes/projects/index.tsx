import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  loader: () => true,
});
