import { Divider, Flex } from "@/components/base";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartGantt,
  List,
  ListFilterPlus,
  Plus,
  Search,
  SquareKanban,
} from "lucide-react";

export const Filters = () => (
  <>
    <Flex className="mb-2 w-full justify-between px-6">
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
      <Flex className="gap-2">
        <Input prefix={<Search />} placeholder="Search..." />
        <Divider />
        <Button variant="outline">
          <ListFilterPlus />
          Filter
        </Button>
        <Button>
          <Plus />
          New Task
        </Button>
      </Flex>
    </Flex>
    <Divider orientation="horizontal" />
  </>
);
