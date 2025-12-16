import { ScrollBar } from "@/components/ui/scroll-area";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export const Board = () => {
  return (
    <ScrollArea className="flex h-full w-full gap-4 overflow-auto px-6 ">
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
