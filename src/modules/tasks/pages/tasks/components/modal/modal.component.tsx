import { Divider } from "@/components/base";
import { DialogContent } from "@/components/ui/dialog";
import { Header } from "@/modules/tasks/pages/tasks/components/modal";
import { Details } from "@/modules/tasks/pages/tasks/components/modal/components/details";

export const Modal = () => {
  return (
    <DialogContent className="data-[state=closed]:slide-out-to-top-[0%] data-[state=open]:slide-in-from-top-[0%] h-full gap-0 p-0 sm:h-[calc(100%-16px)] md:top-1/2 md:right-2 md:translate-x-0">
      <Header />
      <Divider orientation="horizontal" />
      <Details />
    </DialogContent>
  );
};
