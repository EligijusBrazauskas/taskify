import { TaskComment } from "@/modules/tasks/interfaces";

export const taskComments: TaskComment[] = [
  {
    id: "1",
    authorId: "1",
    taskId: "1",
    description:
      "Hey, I think this task requires more details. Can you please elaborate? Thanks! 😊 Also I will need new designs for later time",
    postedAt: new Date("2025-06-12"),
  },
  {
    id: "2",
    authorId: "2",
    taskId: "1",
    description:
      "This is a comprehensive comment that provides detailed feedback on the task. We should consider breaking this down into smaller subtasks and assigning them to different team members. Additionally, we need to review the requirements once more to ensure we're aligned on the scope and timeline. Please schedule a meeting with stakeholders to discuss this further.",
    postedAt: new Date("2025-06-13"),
  },
  {
    id: "3",
    authorId: "3",
    taskId: "2",
    description:
      "Great task! I've reviewed the requirements and everything looks good. We should start with the backend implementation first, then move to the frontend. Let me know if you need any clarification on the technical approach.",
    postedAt: new Date("2025-06-14"),
  },
];
