import { SidebarMenu } from "@/components/composite/sidebar/components/sidebar-menu.component";
import { SidebarProjects } from "@/components/composite/sidebar/components/sidebar-projects.component";
import { SidebarTrigger } from "@/components/composite/sidebar/components/sidebar-trigger.component";
import { SidebarUserButton } from "@/components/composite/sidebar/components/sidebar-user-button.component";
import { sidebarMenuConfig } from "@/components/composite/sidebar/config/sidebar-menu.config";
import {
  MenuGroup,
  MenuItem,
  MenuItemRecord,
  mockPinnedProjectsResponse,
} from "@/components/composite/sidebar/interfaces/sidebar-menu.interface";
import { Sidebar } from "@/components/composite/sidebar/sidebar.component";
import { MenuKey } from "@/components/composite/sidebar/types/sidebar-menu.type";

export type {
  MenuItemRecord,
  MenuItem,
  MenuGroup,
  MenuKey,
  mockPinnedProjectsResponse,
};

export { sidebarMenuConfig };

export {
  Sidebar,
  SidebarTrigger,
  SidebarUserButton,
  SidebarMenu,
  SidebarProjects,
};
