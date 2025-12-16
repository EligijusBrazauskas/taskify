import { Flex, Typography } from "@/components/base";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { acronym } from "@/helpers";
import { projects } from "@/mocks";
import { useParams } from "@tanstack/react-router";
import { BookOpenText } from "lucide-react";

export const Header = () => {
  const { projectId } = useParams({ from: "/projects/$projectId/" });
  const project = projects.find(({ id }) => String(id) === projectId);

  return (
    <Flex className="items-center justify-between gap-2 px-6 pt-6 pb-4">
      <Flex className=" gap-2">
        <Avatar className="size-8 rounded-sm">
          <AvatarFallback className="rounded-sm bg-orange-700/80 font-semibold text-white">
            {acronym(project?.title)}
          </AvatarFallback>
        </Avatar>
        <Typography size="2xl" className="text-nowrap">
          {project?.title}
        </Typography>
      </Flex>
      <Button variant="outline">
        <BookOpenText />
        Overview
      </Button>
    </Flex>
  );
};
