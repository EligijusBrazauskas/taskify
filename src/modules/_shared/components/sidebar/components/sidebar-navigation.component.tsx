import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
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
import { Typography } from "@/modules/_shared/components/base";
import { MenuItem } from "@/modules/_shared/components/sidebar/interfaces";

interface SideBarNavigationProps {
  label: string;
  items: MenuItem[];
  onClick?: () => void;
}

export const SideBarNavigation = ({
  label,
  items,
  onClick,
}: SideBarNavigationProps) => {
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
                variant="ghost"
                className="w-full justify-between hover:bg-secondary-light"
              >
                <Typography size="xs">{label}</Typography>
                <ChevronDown className="chevron transition-transform" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSub>
                  {items.map((item) => (
                    <SidebarMenuSubItem
                      key={item.id}
                      className="group/action rounded-md transition-all hover:bg-secondary-light has-[a[data-status=active]]:bg-secondary-light"
                    >
                      {item.type === "link" ? (
                        <Link
                          className={clsx(
                            "flex min-h-7 w-full justify-start gap-2 px-2 py-1 text-secondary hover:text-primary [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:stroke-0.25",
                          )}
                          to={item.to?.to}
                          params={item.to?.params}
                          activeOptions={{
                            exact: true,
                          }}
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                      ) : (
                        <Button
                          variant="link"
                          className={clsx("w-full justify-start")}
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
                          variant="link"
                          className="opacity-0 group-focus-within/action:opacity-100 group-hover/action:opacity-100"
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
