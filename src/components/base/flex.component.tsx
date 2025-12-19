import { cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const flexStyles = cva("flex");

export const Flex = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(flexStyles({ className }))} {...rest}>
    {children}
  </div>
);
