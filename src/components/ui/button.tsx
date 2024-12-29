import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-5 [&_svg]:stroke-1.5 px-2 gap-2 transition-all duration-200 font-normal",
  {
    variants: {
      variant: {
        default:
          "bg-dark text-white hover:bg-dark/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-1.5 border-secondary-border bg-background hover:text-text hover:bg-secondary-hover text-secondary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary-hover hover:text-text text-secondary",
        link: "text-primary underline-offset-4 hover:underline",
        menuButton:
          "justify-start justify-between text-xs font-medium text-secondary hover:text-text hover:bg-white",
        menuItem:
          "gap-3 font-sm text-secondary hover:text-text w-full justify-start text-sm md:text-sm md:hover:bg-white",
          breadcrumb: 'max-w-[90px] justify-start [&_span]:truncate text-xs border border-secondary-border text-secondary hover:bg-secondary-hover disabled:opacity-100 disabled:bg-secondary-hover disabled:text-text',
      },
      size: {
        default: "py-2 px-4",
        sm: "py-1 min-h-29",
        lg: "p-3",
        icon: "w-10 h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
