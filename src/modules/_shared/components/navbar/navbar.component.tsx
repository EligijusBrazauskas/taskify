import { ReactNode } from "react";
import { Divider } from "@/components/base";
import { Flex } from "@/components/base/flex.component";
import { SideBarTrigger } from "@/components/composite/sidebar";

interface NavBarProps {
  BreadCrumbs?: ReactNode;
  Actions?: ReactNode;
}

export const NavBar = ({ BreadCrumbs, Actions }: NavBarProps) => (
  <Flex className="justify-between p-2">
    <Flex className="items-center gap-2">
      <SideBarTrigger />
      <Divider />
      {BreadCrumbs}
    </Flex>
    {Actions}
  </Flex>
);
