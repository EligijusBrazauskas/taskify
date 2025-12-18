import { JSX } from "react";

export interface DropdownItem {
  label: string;
  icon?: JSX.Element;
  onClick?: () => void;
}
