import { TaskAttachment } from "@/modules/tasks/interfaces";

export const taskAttachments: TaskAttachment[] = [
  {
    id: "1",
    taskId: "1",
    fileName: "design-mockup.png",
    fileUrl: "https://example.com/files/design-mockup.png",
    uploadedAt: new Date(),
  },
  {
    id: "2",
    taskId: "1",
    fileName: "design-mockup-11.png",
    fileUrl: "https://example.com/files/design-mockup-1.png",
    uploadedAt: new Date(),
  },
];
