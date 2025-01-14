import { Priority } from "@/modules/projects/interfaces";
import {
  CircleDashed,
  CircleDot,
  CircleDotDashed,
  CircleEllipsis,
  CircleEqual,
} from "lucide-react";

export const getPriorityColorScheme = (priority: Priority) => {
  switch (priority) {
    case "lowest": {
      return "bg-green-100 text-green-700";
    }
    case "low": {
      return "bg-blue-100 text-blue-700";
    }
    case "medium": {
      return "bg-yellow-100 text-yellow-700";
    }
    case "high": {
      return "bg-orange-100 text-orange-700";
    }
    case "highest": {
      return "bg-red-100 text-red-700";
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
