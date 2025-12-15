import { VariantProps, cva } from "class-variance-authority";
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
      colorScheme: {
        success: "bg-green-100 text-green-700",
        neutral: "bg-blue-100 text-blue-700",
        warning: "bg-yellow-100 text-yellow-700",
        alert: "bg-orange-100 text-orange-700",
        danger: "bg-red-100 text-red-700",
        lime: "bg-lime-100 text-lime-700",
        emerald: "bg-emerald-100 text-emerald-700",
        teal: "bg-teal-100 text-teal-700",
        cyan: "bg-cyan-100 text-cyan-700",
        sky: "bg-sky-100 text-sky-700",
        indigo: "bg-indigo-100 text-indigo-700",
        violet: "bg-violet-100 text-violet-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, colorScheme, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, colorScheme }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
