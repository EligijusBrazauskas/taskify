import { PropsWithChildren } from "react";
import { Flex } from "@/modules/_shared/components/base";

export const TaskModalDetails = ({ children }: PropsWithChildren) => (
  <Flex className="flex-col items-start gap-4 overflow-auto pt-4">
    {children}
  </Flex>
);
