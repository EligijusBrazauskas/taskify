import { DropdownItem } from "@/modules/_shared/interfaces";
import { Pin, Plus, Star } from "lucide-react";

export const actionDefaults: DropdownItem[] = [
  {
    icon: <Star />,
    label: "Favorite",
  },
  {
    icon: <Pin />,
    label: "Pin",
  },
];

export const projectsActions: DropdownItem[] = [
  {
    icon: <Plus />,
    label: "New Project",
  },
];

export const tasksActions: DropdownItem[] = [
  {
    icon: <Plus />,
    label: "New Task",
  },
];

export const projectActions: DropdownItem[] = [
  ...projectsActions,
  ...actionDefaults,
];

export const taskActions: DropdownItem[] = [...tasksActions, ...actionDefaults];
