import { ListFilterPlus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Divider, Flex, Typography } from "@/modules/_shared/components/base";
import { FiltersTabs } from "@/modules/_shared/components/filters";
import { useContainerQuery } from "@/modules/_shared/hooks";

export const Filters = () => {
  const [isMd, isXl, is3Xl] = useContainerQuery(["isXl", "3xl"]);

  return (
    <>
      <Flex className="my-2 justify-between gap-2 px-6">
        <FiltersTabs />
        <Flex className="gap-2">
          {isXl && <Input placeholder="Search..." className="h-7" />}
          {isXl && <Divider />}
          <Button variant="outline">
            <ListFilterPlus size={18} />
            {is3Xl && <Typography>Filter</Typography>}
          </Button>
          {/* TODO: add different actions for pages */}
          {isMd && (
            <Button>
              <Plus size={16} />
              {is3Xl && <Typography>New Task</Typography>}
            </Button>
          )}
        </Flex>
      </Flex>
      <Divider orientation="horizontal" />
    </>
  );
};
