import { Flex, Typography } from "@/components/base";
import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface SummaryItemProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  label?: string;
  icon?: ReactNode;
}

export const SummaryItem = ({
  label,
  icon,
  children,
  ...rest
}: SummaryItemProps) => (
  <Flex className="flex-wrap justify-between gap-2" {...rest}>
    <Flex className="items-center justify-center gap-2 text-secondary [&_svg]:shrink-0">
      {icon}
      {label && <Typography>{label}</Typography>}
    </Flex>
    {children}
  </Flex>
);
