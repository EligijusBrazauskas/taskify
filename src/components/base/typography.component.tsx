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

type TypographyProps = SpanProps | ParagraphProps | HeadingProps;

export const Typography = ({
  as = "span",
  children,
  ...rest
}: TypographyProps) => createElement(as, rest, children);
