import { JSX } from "react";

export interface DropdownItem {
  icon?: JSX.Element;
  label?: string;
  onClick?: () => void;
}
