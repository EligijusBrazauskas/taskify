import { BadgeProps } from "@/components/ui/badge";
import { TaskType } from "@/modules/tasks/interfaces";

export const taskTypeColorSchemeMap: Record<
  TaskType,
  BadgeProps["colorScheme"]
> = {
  feature: "success",
  story: "lime",
  epic: "emerald",
  improvement: "teal",
  task: "cyan",
  "sub-task": "sky",
  spike: "indigo",
  bug: "danger",
  chore: "warning",
  incident: "alert",
};
