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
  lowest: <CircleDashed />,
  low: <CircleDotDashed />,
  medium: <CircleEllipsis />,
  high: <CircleDot />,
  highest: <CircleEqual />,
};
