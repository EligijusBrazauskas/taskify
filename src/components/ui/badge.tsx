import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-sm border px-1 text-xs first-letter:uppercase focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:stroke-0.25",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-white",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  colorScheme?: string;
}

function Badge({ className, variant, colorScheme, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className, colorScheme)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
