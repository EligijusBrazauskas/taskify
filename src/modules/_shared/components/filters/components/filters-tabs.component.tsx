import { ChartGantt, List, SquareKanban } from "lucide-react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const FiltersTabs = () => (
  <TabsList>
    <TabsTrigger value="board">
      <SquareKanban />
      Board
    </TabsTrigger>
    <TabsTrigger value="list">
      <List />
      List
    </TabsTrigger>
    <TabsTrigger value="timeline">
      <ChartGantt />
      Timeline
    </TabsTrigger>
  </TabsList>
);
