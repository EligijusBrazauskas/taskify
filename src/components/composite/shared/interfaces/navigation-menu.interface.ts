import { DynamicPath, Path } from "@/types/path.type";

export interface MenuItemRecord {
  id: number;
  label: string;
}

export interface MenuItemChildrenAction {
  icon?: JSX.Element;
  onClick?: () => void;
}

export interface MenuItem extends MenuItemRecord {
  path: Path | DynamicPath;
  icon?: JSX.Element;
  action?: MenuItemChildrenAction;
}

export interface MenuGroup {
  label: string;
  children: MenuItem[];
}

export interface mockPinnedProjectsResponse {
  data: MenuItemRecord[];
}
