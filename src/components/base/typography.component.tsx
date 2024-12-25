import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, createElement } from "react";

type HTMLHeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HTMLTextTag = "span" | "p" | HTMLHeadingTag;

type SpanProps = {
  as?: Extract<HTMLTextTag, "span">;
} & HTMLAttributes<HTMLSpanElement>;

type ParagraphProps = {
  as?: Extract<HTMLTextTag, "p">;
} & HTMLAttributes<HTMLParagraphElement>;

type HeadingProps = {
  as?: HTMLHeadingTag;
} & HTMLAttributes<HTMLParagraphElement>;

const typographyVariants = cva("", {
  variants: {
    variant: {
      default: "text-text",
      secondary: "text-secondary",
      light: "text-text-light",
      unstyled: "text-xs",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
    },
  },
});

type TypographyProps = (SpanProps | ParagraphProps | HeadingProps) &
  VariantProps<typeof typographyVariants>;

export const Typography = ({
  as = "span",
  className,
  variant,
  size,
  children,
  ...rest
}: TypographyProps) =>
  createElement(
    as,
    {
      className: cn(typographyVariants({ className, variant, size })),
      ...rest,
    },
    children,
  );
