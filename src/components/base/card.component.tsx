import { Flex } from "@/components/base/flex.component";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Card = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <Flex
    className={cn(
      "rounded-lg flex-col gap-2 bg-white p-2 border-1.5 border-secondary-border shadow-sm",
      className,
    )}
    {...rest}
  >
    {children}
  </Flex>
);
