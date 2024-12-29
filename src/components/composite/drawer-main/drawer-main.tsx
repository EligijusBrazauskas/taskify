import {
  NavigationMenu,
  NavigationUserButton,
} from "@/components/composite/shared/components";
import { navigationMenuDefaults } from "@/components/composite/shared/defaults";
import { MenuGroup } from "@/components/composite/shared/interfaces";
import { mockPinnedProjectsData } from "@/components/composite/shared/mocks";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useToast } from "@/hooks/use-toast";
import { FolderOpen, Menu, PinOff } from "lucide-react";

export const DrawerMain = () => {
  const { dismiss } = useToast();

  const pinnedProjectsGroup: MenuGroup[] = [
    {
      label: "PINNED PROJECTS",
      children: mockPinnedProjectsData.data.map((item) => ({
        ...item,
        path: `projects/${item.id}`,
        icon: <FolderOpen />,
        action: {
          icon: <PinOff />,
          onClick: () => console.log("unpin"),
        },
      })),
    },
  ];

  return (
    <Drawer autoFocus>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" onClick={() => dismiss()}>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-0">
          <NavigationUserButton />
        </DrawerHeader>
        {/* <ScrollArea className="flex flex-col"> */}
        {/* <Flex className="flex-col gap-2 overflow-auto pt-2 pb-4"> */}
        {navigationMenuDefaults.map((group, index) => (
          <NavigationMenu key={index} group={group} />
        ))}
        {pinnedProjectsGroup.map((group, index) => (
          <NavigationMenu key={index} group={group} />
        ))}
        {/* </Flex> */}
        {/* </ScrollArea> */}
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" size="default">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
