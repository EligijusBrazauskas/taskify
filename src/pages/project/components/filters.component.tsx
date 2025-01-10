import { Divider, Flex, Typography } from "@/components/base";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContainerQuery } from "@/hooks";
import {
  ChartGantt,
  List,
  ListFilterPlus,
  Plus,
  Search,
  SquareKanban,
} from "lucide-react";

export const Filters = () => {
  const [isMd, isXl, is3Xl] = useContainerQuery(["md", "xl", "3xl"]);

  return (
    <>
      <Flex className="mb-2 justify-between gap-2 px-6">
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
          {isXl && <Input prefix={<Search />} placeholder="Search..." />}
          {isXl && <Divider />}
          <Button variant="outline">
            <ListFilterPlus />
            {is3Xl && <Typography>Filter</Typography>}
          </Button>
          {isMd && (
            <Button>
              <Plus />
              {is3Xl && <Typography>New Task</Typography>}
            </Button>
          )}
        </Flex>
      </Flex>
      <Divider orientation="horizontal" />
    </>
  );
};
