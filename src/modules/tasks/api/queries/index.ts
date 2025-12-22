import { useTaskAttachmentsQuery } from "@/modules/tasks/api/queries/use-task-attachments-query.hook";
import { useTaskCommentsQuery } from "@/modules/tasks/api/queries/use-task-comments-query.hook";
import { useTaskStatusesQuery } from "@/modules/tasks/api/queries/use-task-statuses-query.hook";
import {
  tasksQueryOptions,
  useTasksSuspenseQuery,
} from "@/modules/tasks/api/queries/use-tasks-suspense-query.hook";

export {
  useTaskStatusesQuery,
  useTaskCommentsQuery,
  useTaskAttachmentsQuery,
  useTasksSuspenseQuery,
  tasksQueryOptions,
};
