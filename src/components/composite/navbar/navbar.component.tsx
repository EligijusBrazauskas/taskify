import { Divider } from "@/components/base";
import { Flex } from "@/components/base/flex.component";
import { NavBarProjectActions } from "@/components/composite/navbar";
import { NavBarBreadcrumb } from "@/components/composite/navbar/components/navbar-breadcrumb.component";
import { SideBarTrigger } from "@/components/composite/sidebar";
import { useMatchRoute } from "@tanstack/react-router";

export const NavBar = () => {
  const matchRoute = useMatchRoute();

  return (
    <Flex className="@container justify-between p-2">
      <Flex className="items-center gap-2">
        <SideBarTrigger />
        <Divider />
        <NavBarBreadcrumb />
      </Flex>
      {matchRoute({ to: "/projects", fuzzy: true }) && <NavBarProjectActions />}
    </Flex>
  );
};
