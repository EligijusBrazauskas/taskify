import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "items-cente inline-flex justify-center gap-2 self-center whitespace-nowrap rounded-md font-normal text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:stroke-0.25",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        secondary:
          "bg-secondary-soft text-secondary hover:bg-secondary-soft/90",
        outline:
          "-outline-offset-1 bg-white text-secondary outline outline-1 outline-secondary-light hover:text-primary hover:outline-primary",
        ghost: "text-secondary hover:bg-secondary-soft hover:text-primary",
        link: "justify-between text-secondary hover:text-primary",
      },
      size: {
        default: "min-h-7 px-2 py-1",
        xs: "min-h-6 p-0.5",
        sm: "p-1",
        md: "px-2 py-2",
        lg: "px-6 py-2",
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
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
