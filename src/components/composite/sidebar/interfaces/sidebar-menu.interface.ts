import { MenuKey } from "@/components/composite/sidebar";
import { DynamicPath, Path } from "@/types/path.type";

export interface MenuItemRecord {
  id: number;
  label: string;
}

export interface MenuItem extends MenuItemRecord {
  path: Path | DynamicPath;
  icon?: JSX.Element;
}

export interface MenuGroup {
  label: string;
  key: MenuKey;
  children: MenuItem[];
}

export interface mockPinnedProjectsResponse {
  data: MenuItemRecord[];
}
