import { DialogContentProps } from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Divider } from "@/modules/_shared/components/base";

interface TaskModalContentProps extends DialogContentProps {
  Header?: ReactNode;
  Content?: ReactNode;
}

export const TaskModalContent = ({
  Header,
  Content,
  className,
  ...rest
}: TaskModalContentProps) => (
  <DialogContent
    className={cn(
      "data-[state=closed]:slide-out-to-top-[0%] data-[state=open]:slide-in-from-top-[0%] h-full gap-0 p-0 sm:h-[calc(100%-16px)] md:top-1/2 md:right-2 md:translate-x-0",
      className,
    )}
    {...rest}
  >
    {Header}
    <Divider orientation="horizontal" />
    {Content}
  </DialogContent>
);
