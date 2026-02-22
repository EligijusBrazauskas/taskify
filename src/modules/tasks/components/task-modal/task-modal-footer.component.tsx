import { Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Divider, Flex } from "@/modules/_shared/components/base";

export const TaskModalFooter = () => (
  <DialogFooter className="flex-col">
    <Divider orientation="horizontal" />
    <Flex className="items-start justify-between gap-2 px-6 py-2">
      <Textarea placeholder="Add comment" className="resize-none" />
      <Flex className="gap-2">
        <Button variant="outline">
          <Paperclip size={16} />
        </Button>
        <Button>
          <Send size={16} /> Send
        </Button>
      </Flex>
    </Flex>
  </DialogFooter>
);
