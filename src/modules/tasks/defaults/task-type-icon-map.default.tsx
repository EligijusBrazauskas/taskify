import { TaskType } from "@/modules/tasks/interfaces";
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

export const taskTypeIconMap: Record<TaskType, JSX.Element> = {
  feature: <Feather />,
  story: <Scroll />,
  epic: <ScrollText />,
  improvement: <Vote />,
  task: <SquareCheck />,
  "sub-task": <ListTodo />,
  spike: <ArrowUpRight />,
  bug: <Bug />,
  chore: <Ruler />,
  incident: <ShieldAlert />,
};
