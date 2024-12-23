import { Divider, Typography } from "@/components/base";
import { Flex } from "@/components/base/flex.component";
import { Drawer } from "@/components/composite/drawer";
import { NavBarPagination } from "@/components/composite/navbar";
import { NavBarBreadcrumb } from "@/components/composite/navbar/components/navbar-breadcrumb.component";
import { SidebarTrigger } from "@/components/composite/sidebar";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Ellipsis, Plus, Star } from "lucide-react";

export const NavBar = () => {
  const isMobile = useIsMobile();

  return (
    <Flex className="p-2 justify-between">
      <Flex className="items-center gap-2">
        {isMobile ? <Drawer /> : <SidebarTrigger />}
        <Divider />
        <NavBarPagination />
        <Divider />
        <NavBarBreadcrumb />
      </Flex>
      <Flex className="gap-2">
        <Button variant="ghost">
          <Plus />
          <Typography>New Project</Typography>
        </Button>
        <Divider />
        <Flex>
          <Button variant="ghost">
            <Star />
          </Button>
          <Button variant="ghost">
            <Ellipsis />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
