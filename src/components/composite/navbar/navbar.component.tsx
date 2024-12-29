import { Divider, Typography } from "@/components/base";
import { Flex } from "@/components/base/flex.component";
import { DrawerMain } from "@/components/composite/drawer-main";
import { NavBarPagination } from "@/components/composite/navbar";
import { NavBarBreadcrumb } from "@/components/composite/navbar/components/navbar-breadcrumb.component";
import { SidebarTrigger } from "@/components/composite/sidebar-main";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Plus, Star } from "lucide-react";

export const NavBar = () => {
  const isMobile = useIsMobile();

  return (
    <Flex className="@container justify-between p-2">
      <Flex className="items-center gap-2">
        {isMobile ? <DrawerMain /> : <SidebarTrigger />}
        <Divider />
        <NavBarPagination />
        <Divider />
        <NavBarBreadcrumb />
      </Flex>
      <Flex className="gap-2">
        <Button variant="ghost" size="sm">
          <Plus />
          <Typography className="@2xl:flex hidden">New Project</Typography>
        </Button>
        <Divider />
        <Button variant="ghost" size="sm">
          <Star />
        </Button>
      </Flex>
    </Flex>
  );
};
