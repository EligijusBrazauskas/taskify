import { DropdownItem } from "@/interfaces";
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

export const projectsActionDefaults: DropdownItem[] = [
  {
    icon: <Plus />,
    label: "New Project",
  },
];

export const tasksActionDefaults: DropdownItem[] = [
  {
    icon: <Plus />,
    label: "New Task",
  },
];

export const projectActionDefaults: DropdownItem[] = [
  ...projectsActionDefaults,
  ...actionDefaults,
];

export const taskActionDefaults: DropdownItem[] = [
  ...tasksActionDefaults,
  ...actionDefaults,
];

export const tagsActionDefaults: DropdownItem[] = [
  {
    icon: <Plus />,
    label: "New Tag",
  },
];
