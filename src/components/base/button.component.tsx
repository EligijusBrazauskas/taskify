import {
  ButtonTypeVariants,
  Button as ShadcnButton,
  ButtonProps as ShadcnButtonProps,
} from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PartialVariantsProperty } from "@/types/variants.type";
import { cva } from "class-variance-authority";

const variant: PartialVariantsProperty<ButtonTypeVariants> = {
  outline:
    "hover:bg-secondary-background border-secondary-border text-secondary",
  ghost: "hover:bg-secondary-background text-secondary",
};

const buttonVariants = cva("[&_svg]:size-6 [&_svg]:stroke-1.5 px-2", {
  variants: {
    variant,
  },
});

export const Button = ({
  className,
  variant,
  size = "sm",
  ...rest
}: ShadcnButtonProps & ButtonTypeVariants) => (
  <ShadcnButton
    className={cn(buttonVariants({ variant, className }))}
    variant={variant}
    size={size}
    {...rest}
  />
);
