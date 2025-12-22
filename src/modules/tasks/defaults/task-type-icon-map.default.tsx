import {
  ArrowUpRight,
  Bug,
  Feather,
  ListTodo,
  Ruler,
  Scroll,
  ScrollText,
  ShieldAlert,
  SquareCheck,
  Vote,
} from "lucide-react";
import { JSX } from "react";
import { TaskType } from "@/modules/tasks/interfaces";

export const taskTypeIconMap: Record<TaskType, JSX.Element> = {
  feature: <Feather size={16} />,
  story: <Scroll size={16} />,
  epic: <ScrollText size={16} />,
  improvement: <Vote size={16} />,
  task: <SquareCheck size={16} />,
  "sub-task": <ListTodo size={16} />,
  spike: <ArrowUpRight size={16} />,
  bug: <Bug size={16} />,
  chore: <Ruler size={16} />,
  incident: <ShieldAlert size={16} />,
};
