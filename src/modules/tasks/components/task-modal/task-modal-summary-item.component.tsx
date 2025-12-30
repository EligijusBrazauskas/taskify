import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";
import { Flex, Typography } from "@/modules/_shared/components/base";

interface SummaryItemProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  label?: string;
  icon?: ReactNode;
}

export const TaskModalSummaryItem = ({
  label,
  icon,
  children,
  ...rest
}: SummaryItemProps) => (
  <Flex className="flex-wrap justify-between gap-2" {...rest}>
    <Flex className="items-center justify-center gap-2 text-secondary">
      {icon}
      {label && <Typography>{label}</Typography>}
    </Flex>
    {children}
  </Flex>
);
