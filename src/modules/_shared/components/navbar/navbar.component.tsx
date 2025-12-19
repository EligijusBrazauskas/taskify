import { ReactNode } from "react";
import { Divider, Flex } from "@/modules/_shared/components/base";
import { SideBarTrigger } from "@/modules/_shared/components/sidebar";

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
