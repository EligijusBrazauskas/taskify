import { taskComments } from "@/mocks";
import { users } from "@/mocks/users.mock";
import { TaskComment } from "@/modules/tasks/interfaces";

export const taskCommentsWithAuthors: TaskComment[] = taskComments.map(
  (comment) => ({
    ...comment,
    author: users.find((user) => user.id === comment.authorId),
  }),
);
