import { Divider, Flex } from "@/modules/_shared/components/base";
import {
  NavBarActions,
  NavBarBreadcrumbs,
} from "@/modules/_shared/components/navbar";
import {
  tasksActions,
  tasksBreadcrumbs,
} from "@/modules/_shared/components/navbar/defaults";
import { SideBarTrigger } from "@/modules/_shared/components/sidebar";

export const NavBar = () => (
  <Flex className="justify-between p-2">
    <Flex className="items-center gap-2">
      <SideBarTrigger />
      <Divider />
      <NavBarBreadcrumbs breadcrumbs={tasksBreadcrumbs} />
    </Flex>
    <NavBarActions actions={tasksActions} />
  </Flex>
);
