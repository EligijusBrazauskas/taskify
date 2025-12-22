import { tasks } from "@/mocks";
import { users } from "@/mocks/users.mock";
import { Task } from "@/modules/tasks/interfaces";

export const tasksWithAssignees: Task[] = tasks.map((task) => ({
  ...task,
  assignee: users.find((user) => user.id === task.assigneeId),
}));
