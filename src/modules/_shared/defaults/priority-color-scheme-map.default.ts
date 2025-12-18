import { BadgeProps } from "@/components/ui/badge";
import { Priority } from "@/modules/_shared/types";

export const priorityColorSchemeMap: Record<
  Priority,
  BadgeProps["colorScheme"]
> = {
  lowest: "success",
  low: "neutral",
  medium: "warning",
  high: "alert",
  highest: "danger",
};
