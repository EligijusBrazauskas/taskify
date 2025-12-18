import { Breadcrumb } from "@/modules/_shared/components/navbar/interfaces";

export const projectsBreadcrumbs: Breadcrumb[] = [
  {
    label: "Projects",
    to: {
      to: "/projects",
    },
  },
];

export const projectBreadcrumbs = (
  label: string,
  projectId: string,
): Breadcrumb[] => [
  ...projectsBreadcrumbs,
  {
    label,
    to: { to: "/projects/$projectId", params: { projectId } },
  },
];

export const tasksBreadcrumbs: Breadcrumb[] = [
  {
    label: "Tasks",
    to: {
      to: "/tasks",
    },
  },
];

export const taskBreadcrumbs = (
  label: string,
  taskId: string,
): Breadcrumb[] => [
  ...tasksBreadcrumbs,
  {
    label,
    to: { to: "/tasks/$taskId", params: { taskId } },
  },
];
