import { Type } from "@/modules/projects/interfaces/task.interface";
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

export const getTypeColorScheme = (type: Type) => {
  switch (type) {
    case "feature": {
      return "bg-green-100 text-green-700";
    }
    case "story": {
      return "bg-lime-100 text-lime-700";
    }
    case "epic": {
      return "bg-emerald-100 text-emerald-700";
    }
    case "improvement": {
      return "bg-teal-100 text-teal-700";
    }
    case "task": {
      return "bg-cyan-100 text-cyan-700";
    }
    case "sub-task": {
      return "bg-sky-100 text-sky-700";
    }
    case "spike": {
      return "bg-indigo-100 text-indigo-700";
    }
    case "bug": {
      return "bg-red-100 text-red-700";
    }
    case "chore": {
      return "bg-yellow-100 text-yellow-700";
    }
    case "incident": {
      return "bg-orange-100 text-orange-700";
    }
  }
};

export const getTypeIcon = (type: Type) => {
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
  }
};
