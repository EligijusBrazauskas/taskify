import { ToOptions } from "@tanstack/react-router";
import { JSX } from "react";

export interface MenuItemAction {
  icon?: JSX.Element;
  onClick?: () => void;
}

export interface MenuItemBase {
  id: number | string;
  label: string;
  icon?: JSX.Element;
  action?: MenuItemAction;
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
