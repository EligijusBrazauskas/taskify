import { Breadcrumb } from "@/modules/_shared/components/navbar/interfaces";

export const projectsBreadcrumbs: Breadcrumb[] = [
  {
    label: "Projects",
    to: {
      to: "/projects",
    },
  },
];

export const projectBreadcrumb = (
  label: string,
  projectId: string,
): Breadcrumb[] => [
  {
    label,
    to: { to: "/projects/$projectId", params: { projectId } },
  },
];

export const projectBreadcrumbs = (
  label: string,
  projectId: string,
): Breadcrumb[] => [
  ...projectsBreadcrumbs,
  ...projectBreadcrumb(label, projectId),
];

export const tasksBreadcrumbs: Breadcrumb[] = [
  {
    label: "Tasks",
    to: {
      to: "/tasks",
    },
  },
];

export const taskBreadcrumb = (label: string, taskId: string): Breadcrumb[] => [
  {
    label,
    to: { to: "/tasks/$taskId", params: { taskId } },
  },
];

export const taskBreadcrumbs = (
  label: string,
  taskId: string,
): Breadcrumb[] => [...tasksBreadcrumbs, ...taskBreadcrumb(label, taskId)];
