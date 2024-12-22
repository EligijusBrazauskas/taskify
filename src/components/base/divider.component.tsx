import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const dividerVariants = cva("flex bg-secondary-border h-full", {
  variants: {
    size: {
      default: "w-0.5",
    },
    orientation: {
      horizontal: "h-0.5 w-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type DividerProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof dividerVariants>;

export const Divider = ({
  className,
  size,
  orientation,
  ...rest
}: DividerProps) => {
  return (
    <span
      className={cn(dividerVariants({ className, size, orientation }))}
      {...rest}
    />
  );
};
