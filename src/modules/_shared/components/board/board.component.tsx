import { ScrollArea } from "@radix-ui/react-scroll-area";
import { PropsWithChildren } from "react";
import { ScrollBar } from "@/components/ui/scroll-area";

export const Board = ({ children }: PropsWithChildren) => (
  <ScrollArea className="flex h-full w-full gap-4 overflow-auto px-6">
    {children}
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);
