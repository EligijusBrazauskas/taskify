import { ListFilterPlus, Search } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Divider, Flex, Typography } from "@/modules/_shared/components/base";
import { FiltersTabs } from "@/modules/_shared/components/filters";
import { useContainerQuery } from "@/modules/_shared/hooks";

interface FiltersProps {
  Action?: ReactNode;
}

export const Filters = ({ Action }: FiltersProps) => {
  const [isXl, is3Xl] = useContainerQuery(["isXl", "3xl"]);

  return (
    <>
      <Flex className="my-2 justify-between gap-2 px-6">
        <FiltersTabs />
        <Flex className="gap-2">
          {isXl && <Input prefix={<Search />} placeholder="Search..." />}
          {isXl && <Divider />}
          <Button variant="outline">
            <ListFilterPlus />
            {is3Xl && <Typography>Filter</Typography>}
          </Button>
          {Action}
        </Flex>
      </Flex>
      <Divider orientation="horizontal" />
    </>
  );
};
