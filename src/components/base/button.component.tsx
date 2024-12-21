import { ButtonProps, Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Button = ({ className, ...rest }: ButtonProps) => (
  <ShadcnButton className={cn(`[&_svg]:size-6 p-2 ${className}`)} {...rest} />
);
