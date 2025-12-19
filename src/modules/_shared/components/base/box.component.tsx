import type { HTMLAttributes } from "react";

export const Box = ({ children, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div {...rest}>{children}</div>
);
