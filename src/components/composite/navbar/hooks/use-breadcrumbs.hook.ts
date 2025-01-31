import {
  projectsBreadcrumb,
  tasksBreadcrumb,
} from "@/components/composite/navbar/defaults";
import { useMatchRoute } from "@tanstack/react-router";

export const useBreadcrumbs = () => {
  const matchRoute = useMatchRoute();
  const projectRoute = matchRoute({ to: "/projects/$projectId" });
  const taskRoute = matchRoute({ to: "/tasks/$taskId" });

  if (matchRoute({ to: "/projects" })) {
    return projectsBreadcrumb;
  }

  if (projectRoute) {
    const { projectId } = projectRoute;

    return [
      ...projectsBreadcrumb,
      {
        label: "Project",
        pathname: `/projects/${projectId}`,
      },
    ];
  }

  if (matchRoute({ to: "/tasks" })) {
    return tasksBreadcrumb;
  }

  if (taskRoute) {
    const { taskId } = taskRoute;

    return [
      ...tasksBreadcrumb,
      {
        label: "Task",
        pathname: `/tasks/${taskId}`,
      },
    ];
  }

  return [];
};
