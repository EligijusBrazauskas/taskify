import { TasksPage } from "@/modules/tasks/pages/tasks";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/tasks/")({
  component: () => <TasksPage />,
});
