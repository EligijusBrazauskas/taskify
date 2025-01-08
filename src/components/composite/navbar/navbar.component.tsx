import { Divider } from "@/components/base";
import { Flex } from "@/components/base/flex.component";
import { NavBarActions } from "@/components/composite/navbar/components/navbar-actions.component";
import { NavBarBreadcrumb } from "@/components/composite/navbar/components/navbar-breadcrumb.component";
import { SideBarTrigger } from "@/components/composite/sidebar";

export const NavBar = () => (
  <Flex className="@container justify-between p-2">
    <Flex className="items-center gap-2">
      <SideBarTrigger />
      <Divider />
      <NavBarBreadcrumb />
    </Flex>
    <NavBarActions />
  </Flex>
);
