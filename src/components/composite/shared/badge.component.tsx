import { Typography } from "@/components/base";
import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { getPriorityColorScheme, getPriorityIcon, isPriority } from "@/helpers";
import { Priority } from "@/interfaces";
import { getTypeColorScheme, getTypeIcon } from "@/modules/tasks/helpers";
import { Type } from "@/modules/tasks/interfaces";

interface BadgeProps {
  property: Priority | Type;
}

export const Badge = ({ property }: BadgeProps) => (
  <ShadcnBadge
    colorScheme={
      isPriority(property)
        ? getPriorityColorScheme(property)
        : getTypeColorScheme(property)
    }
    className="self-center"
  >
    {isPriority(property) ? getPriorityIcon(property) : getTypeIcon(property)}
    <Typography className="first-letter:uppercase">{property}</Typography>
  </ShadcnBadge>
);
