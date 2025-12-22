import { Pin, Plus, Star } from "lucide-react";
import { DropdownItem } from "@/modules/_shared/interfaces";

export const actionDefaults: DropdownItem[] = [
  {
    icon: <Star size={18} />,
    label: "Favorite",
  },
  {
    icon: <Pin size={18} />,
    label: "Pin",
  },
];

export const projectsActions: DropdownItem[] = [
  {
    icon: <Plus size={18} />,
    label: "New Project",
  },
];

export const tasksActions: DropdownItem[] = [
  {
    icon: <Plus size={18} />,
    label: "New Task",
  },
];

export const projectActions: DropdownItem[] = [
  ...projectsActions,
  ...actionDefaults,
];

export const taskActions: DropdownItem[] = [...tasksActions, ...actionDefaults];
