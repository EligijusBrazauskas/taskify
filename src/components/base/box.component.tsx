import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export const Box = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(className)} {...rest}>
    {children}
  </div>
);
