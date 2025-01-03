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

export const projectActionDefaults: DropdownItem[] = [
  {
    icon: <Plus />,
    label: "New Project",
  },
  ...actionDefaults,
];

export const issueActionDefaults: DropdownItem[] = [
  {
    icon: <Plus />,
    label: "New Issue",
  },
  ...actionDefaults,
];

export const tagActionDefaults: DropdownItem[] = [
  {
    icon: <Plus />,
    label: "New Tag",
  },
  ...actionDefaults,
];
