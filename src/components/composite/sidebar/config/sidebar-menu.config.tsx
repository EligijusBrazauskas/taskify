import { MenuGroup } from "@/components/composite/sidebar";
import { sidebarMenuDefaults } from "@/components/composite/sidebar/defaults/sidebar-menu.default";

export const sidebarMenuConfig = (props: MenuGroup[]) => [
  ...sidebarMenuDefaults,
  ...props.map(({ label, key, children }) => ({
    label,
    key,
    children,
  })),
];
