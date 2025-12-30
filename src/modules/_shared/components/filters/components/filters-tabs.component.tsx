import { ChartGantt, List, SquareKanban } from "lucide-react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const FiltersTabs = () => (
  <TabsList>
    <TabsTrigger value="board">
      <SquareKanban size={20} strokeWidth={1.5} />
      Board
    </TabsTrigger>
    <TabsTrigger value="list">
      <List size={20} strokeWidth={1.5} />
      List
    </TabsTrigger>
    <TabsTrigger value="timeline">
      <ChartGantt size={20} strokeWidth={1.5} />
      Timeline
    </TabsTrigger>
  </TabsList>
);
