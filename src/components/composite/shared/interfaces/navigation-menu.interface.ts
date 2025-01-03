import { Path } from "@/types/path.type";

export interface MenuItemRecord {
  id: number | string;
  label: string;
}

export interface MenuItemChildrenAction {
  icon?: JSX.Element;
  onClick?: () => void;
}

export interface MenuItem extends MenuItemRecord {
  type: "link" | "button";
  path?: Path;
  icon?: JSX.Element;
  onClick?: () => void;
  action?: MenuItemChildrenAction;
}

export interface MenuGroup {
  label: string;
  children: MenuItem[];
}

export interface mockPinnedProjectsResponse {
  data: MenuItemRecord[];
}
