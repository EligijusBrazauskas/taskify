import { Drawer as DrawerProvider } from "@/components/ui/drawer";
import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar";
import { PropsWithChildren } from "react";

export const SidebarProvider = ({ children }: PropsWithChildren) => (
  <ShadcnSidebarProvider>
    <DrawerProvider>{children}</DrawerProvider>
  </ShadcnSidebarProvider>
);
