import { ToOptions } from "@tanstack/react-router";
import { JSX } from "react";

export interface MenuItemRecord {
  id: number | string;
  label: string;
}

export interface MenuItemBase extends MenuItemRecord {
  icon?: JSX.Element;
  action?: MenuItemChildrenAction;
}

export interface MenuItemChildrenAction {
  icon?: JSX.Element;
  onClick?: () => void;
}

export interface MenuButton extends MenuItemBase {
  type: "button";
  onClick?: () => void;
}

export interface MenuLink extends MenuItemBase {
  type: "link";
  to?: ToOptions;
}

export type MenuItem = MenuButton | MenuLink;

export interface MenuGroup {
  label: string;
  children: MenuItem[];
}
