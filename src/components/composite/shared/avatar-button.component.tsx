import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MouseEvent } from "react";

interface AvatarButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const AvatarButton = ({ onClick }: AvatarButtonProps) => (
  <Button variant="link" size="xs" onClick={onClick}>
    <Avatar className="size-6">
      <AvatarFallback className="bg-secondary-light text-secondary text-xs">
        EB
      </AvatarFallback>
    </Avatar>
  </Button>
);
