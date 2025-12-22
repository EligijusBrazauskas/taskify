import {
  CircleDashed,
  CircleDot,
  CircleDotDashed,
  CircleEllipsis,
  CircleEqual,
} from "lucide-react";
import { JSX } from "react";
import { Priority } from "@/modules/_shared/types";

export const priorityIconMap: Record<Priority, JSX.Element> = {
  lowest: <CircleDashed size={16} />,
  low: <CircleDotDashed size={16} />,
  medium: <CircleEllipsis size={16} />,
  high: <CircleDot size={16} />,
  highest: <CircleEqual size={16} />,
};
