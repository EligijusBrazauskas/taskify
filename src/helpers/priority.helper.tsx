import { BadgeProps } from "@/components/ui/badge";
import { Type } from "@/modules/tasks/interfaces";
import { Priority } from "@/types";
import {
  CircleDashed,
  CircleDot,
  CircleDotDashed,
  CircleEllipsis,
  CircleEqual,
} from "lucide-react";

export const getPriorityColorScheme = (
  priority: Priority,
): BadgeProps["colorScheme"] => {
  switch (priority) {
    case "lowest": {
      return "success";
    }
    case "low": {
      return "neutral";
    }
    case "medium": {
      return "warning";
    }
    case "high": {
      return "alert";
    }
    case "highest": {
      return "danger";
    }
  }
};

export const getPriorityIcon = (priority: Priority) => {
  switch (priority) {
    case "lowest": {
      return <CircleDashed />;
    }
    case "low": {
      return <CircleDotDashed />;
    }
    case "medium": {
      return <CircleEllipsis />;
    }
    case "high": {
      return <CircleDot />;
    }
    case "highest": {
      return <CircleEqual />;
    }
  }
};

export const isPriority = (property: Priority | Type): property is Priority =>
  ["lowest", "low", "medium", "high", "highest"].includes(property);
