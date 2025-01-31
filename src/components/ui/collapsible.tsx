import { cn } from "@/lib/utils";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const ShadcnCollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

const CollapsibleContent = ({
  className,
  ...rest
}: CollapsiblePrimitive.CollapsibleProps) => (
  <ShadcnCollapsibleContent
    className={cn(
      "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
      className,
    )}
    {...rest}
  />
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
