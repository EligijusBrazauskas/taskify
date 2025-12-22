import { AvatarProps as RadixAvatarProps } from "@radix-ui/react-avatar";
import { UserPlus } from "lucide-react";
import { MouseEvent, ReactNode } from "react";
import {
  AvatarFallback,
  AvatarImage,
  Avatar as RadixAvatar,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AvatarProps extends RadixAvatarProps {
  avatarUrl?: string;
  fallback?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Avatar = ({
  avatarUrl,
  onClick,
  fallback,
  className,
  ...rest
}: AvatarProps) => (
  <RadixAvatar className={cn("size-6", className)} onClick={onClick} {...rest}>
    <AvatarImage src={avatarUrl} />
    <AvatarFallback className="bg-secondary-light text-secondary text-xs">
      {fallback ? fallback : <UserPlus size={18} />}
    </AvatarFallback>
  </RadixAvatar>
);
