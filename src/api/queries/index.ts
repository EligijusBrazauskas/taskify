import { useProjectStatusesQuery } from "@/api/queries/use-project-statuses.hook";
import {
  projectsQueryOptions,
  useProjectsQuery,
} from "@/api/queries/use-projects-query.hook";
import { useTaskStatusesQuery } from "@/api/queries/use-task-statuses.hook";
import {
  tasksQueryOptions,
  useTasksQuery,
} from "@/api/queries/use-tasks-query.hook";

export {
  useProjectsQuery,
  projectsQueryOptions,
  useProjectStatusesQuery,
  useTaskStatusesQuery,
  useTasksQuery,
  tasksQueryOptions,
};
