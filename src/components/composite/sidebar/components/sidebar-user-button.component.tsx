import { Flex, Typography } from "@/components/base";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const SidebarUserButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "outline", size = "sm", ...rest }, ref) => (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn("justify-start hover:bg-white", className)}
      {...rest}
    >
      <Avatar className="h-8 w-8 shadow-lg">
        <AvatarFallback className="bg-purple-200 font-semibold text-text">
          EB
        </AvatarFallback>
      </Avatar>
      <Flex className="flex-col overflow-hidden text-start">
        <Typography variant="default" className="truncate font-semibold">
          Eligijus Brazauskas
        </Typography>
        <Typography variant="secondary" size="xs" className="truncate">
          email@email.com
        </Typography>
      </Flex>
    </Button>
  ),
);

SidebarUserButton.displayName = "SidebarUserButton";
