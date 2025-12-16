import {
  projectsBreadcrumb,
  tasksBreadcrumb,
} from "@/components/composite/navbar/defaults";
import { projects, tasks } from "@/mocks";
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
        label: projects.find(({ id }) => projectId === String(id))?.title,
        pathname: "/projects/$projectId",
        params: { projectId },
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
        label: tasks.find(({ id }) => taskId === String(id))?.title,
        pathname: "/tasks/$taskId",
        params: { taskId },
      },
    ];
  }

  return [];
};
