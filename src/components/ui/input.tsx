import * as React from "react";

import { Flex } from "@/components/base";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface InputProps extends Omit<React.ComponentProps<"input">, "prefix"> {
  prefix?: ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, prefix, ...props }, ref) => {
    return (
      <Flex
        className={cn(
          "relative text-secondary transition-all duration-200 hover:text-primary [&_svg]:pointer-events-none [&_svg]:absolute [&_svg]:top-1 [&_svg]:left-2 [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:stroke-1.5",
          className,
        )}
      >
        {prefix}
        <input
          type={type}
          className="flex w-full min-w-[100px] max-w-[1px] rounded-md border bg-background pr-2 pl-8 text-primary text-sm ring-offset-background transition-all file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-secondary hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          ref={ref}
          {...props}
        />
      </Flex>
    );
  },
);
Input.displayName = "Input";

export { Input };
