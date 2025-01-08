import { Typography } from "@/components/base";
import { MenuGroup } from "@/components/composite/sidebar/interfaces";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link, useMatchRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

interface SideBarNavigationProps {
  group: MenuGroup;
  onClick?: () => void;
}

export const SideBarNavigation = ({
  group,
  onClick,
}: SideBarNavigationProps) => {
  const { label, children } = group;
  const matchRoute = useMatchRoute();

  return (
    <SidebarGroup>
      <SidebarMenu>
        <Collapsible
          defaultOpen
          className="[&_.chevron]:data-[state=open]:rotate-180"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <Button
                variant="link"
                className="justify-between hover:bg-transparent"
              >
                <Typography size="xs">{label}</Typography>
                <ChevronDown className="chevron transition-transform" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSub>
                  {children.map((item) => (
                    <SidebarMenuSubItem
                      key={item.id}
                      className={clsx(
                        "group/action rounded-md hover:bg-white",
                        item.type === "link" &&
                          !!matchRoute({ to: item.path }) &&
                          "bg-white",
                      )}
                    >
                      {item.type === "link" ? (
                        <Button
                          asChild
                          variant="ghost"
                          className="w-full justify-start hover:bg-white"
                          onClick={onClick}
                        >
                          <Link to={item.path}>
                            {item.icon}
                            {item.label}
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          className="w-full justify-start hover:bg-white"
                          onClick={() => {
                            onClick?.();
                            item.onClick?.();
                          }}
                        >
                          {item.icon}
                          {item.label}
                        </Button>
                      )}
                      {item.action && (
                        <Button
                          variant="ghost"
                          className="group-hover/action:bg-white"
                          onClick={item.action.onClick}
                        >
                          {item.action.icon}
                        </Button>
                      )}
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
};
