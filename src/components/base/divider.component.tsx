import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const dividerVariants = cva("flex h-full bg-secondary-light", {
  variants: {
    size: {
      default: "w-px",
    },
    orientation: {
      horizontal: "h-px min-h-px w-full",
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
