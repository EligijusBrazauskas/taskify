import { BadgeProps } from "@/components/ui/badge";
import { Type } from "@/modules/tasks/interfaces";
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

export const getTypeColorScheme = (type: Type): BadgeProps["colorScheme"] => {
  switch (type) {
    case "feature": {
      return "success";
    }
    case "story": {
      return "lime";
    }
    case "epic": {
      return "emerald";
    }
    case "improvement": {
      return "teal";
    }
    case "task": {
      return "cyan";
    }
    case "sub-task": {
      return "sky";
    }
    case "spike": {
      return "indigo";
    }
    case "bug": {
      return "danger";
    }
    case "chore": {
      return "warning";
    }
    case "incident": {
      return "alert";
    }
  }
};

export const getTypeIcon = (type: Type): JSX.Element => {
  switch (type) {
    case "feature": {
      return <Feather />;
    }
    case "story": {
      return <Scroll />;
    }
    case "epic": {
      return <ScrollText />;
    }
    case "improvement": {
      return <Vote />;
    }
    case "task": {
      return <SquareCheck />;
    }
    case "sub-task": {
      return <ListTodo />;
    }
    case "spike": {
      return <ArrowUpRight />;
    }
    case "bug": {
      return <Bug />;
    }
    case "chore": {
      return <Ruler />;
    }
    case "incident": {
      return <ShieldAlert />;
    }
    default: {
      return <Feather />;
    }
  }
};
