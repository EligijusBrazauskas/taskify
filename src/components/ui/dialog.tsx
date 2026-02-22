import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Flex } from "@/modules/_shared/components/base";

const DialogContextExtended = React.createContext<{
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}>({ triggerRef: { current: null } });

const DialogContextExtendedProvider = ({
  children,
}: React.PropsWithChildren) => {
  const triggerRef = React.useRef(null);

  return (
    <DialogContextExtended.Provider value={{ triggerRef }}>
      {children}
    </DialogContextExtended.Provider>
  );
};

const Dialog = (props: React.ComponentProps<typeof DialogPrimitive.Root>) => (
  <DialogContextExtendedProvider>
    <DialogPrimitive.Root {...props} />
  </DialogContextExtendedProvider>
);

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ onClick, ...rest }, ref) => {
  const { triggerRef } = React.useContext(DialogContextExtended);

  return (
    <DialogPrimitive.Trigger
      ref={ref}
      onClick={(event) => {
        triggerRef.current = event.currentTarget;

        onClick?.(event);
      }}
      {...rest}
    />
  );
});

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.DialogClose>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.DialogClose>
>(({ className, ...rest }, ref) => (
  <DialogPrimitive.Close ref={ref} className={cn(className)} {...rest} />
));

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-primary/20 data-[state=closed]:animate-out data-[state=open]:animate-in",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, onCloseAutoFocus, ...props }, ref) => {
  const { triggerRef } = React.useContext(DialogContextExtended);

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] -translate-y-1/2 fixed top-1/2 right-1/2 z-50 flex w-full max-w-lg translate-x-1/2 flex-col gap-2 rounded-lg border bg-background px-6 py-4 duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in",
          className,
        )}
        onCloseAutoFocus={(event) => {
          if (triggerRef.current) {
            event.preventDefault();
            triggerRef.current.focus();
          }

          onCloseAutoFocus?.(event);
        }}
        {...props}
      >
        <VisuallyHidden>
          <DialogTitle />
          <DialogDescription />
        </VisuallyHidden>
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col items-center justify-start gap-2 space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  >
    <Flex className="w-full justify-between">
      <Flex className="w-full">{children}</Flex>
      <DialogPrimitive.Close asChild>
        <Button variant="ghost">
          <X />
        </Button>
      </DialogPrimitive.Close>
    </Flex>
  </div>
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex w-full", className)} {...props}>
    {children}
  </div>
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-2xl", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
