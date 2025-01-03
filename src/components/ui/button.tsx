import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-5 [&_svg]:stroke-1.5 gap-3 transition-all duration-200 font-normal",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary/90",
        secondary:
          "bg-secondary-light text-secondary hover:bg-secondary-light/90",
        outline:
          "border bg-white hover:text-primary hover:bg-secondary-light text-secondary",
        ghost: "hover:bg-secondary-light hover:text-primary text-secondary",
        link: "w-full justify-start hover:text-primary hover:bg-secondary-light text-secondary",
      },
      size: {
        default: "py-1 px-2",
        sm: "p-1",
        md: "py-2 px-4",
        lg: "py-2 px-6",
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
