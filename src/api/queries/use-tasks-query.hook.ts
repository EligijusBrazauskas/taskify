import { SuccessResponse } from "@/api/types";
import { tasks } from "@/mocks";
import { Task } from "@/modules/tasks/interfaces";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";

//TODO: Remove after API is ready
const mockQueryFn = (mode = "resolve"): SuccessResponse<Task[]> => {
  return new Promise((resolve, reject) => {
    if (mode === "resolve") {
      resolve({ data: tasks });
    }

    if (mode === "reject") {
      reject(new Error("Failed to fetch tasks"));
    }
  });
};

export const tasksQueryOptions = queryOptions({
  queryKey: ["tasks"],
  queryFn: async () => await mockQueryFn("resolve"),
});

export const useTasksQuery = () => {
  //TODO: Implement real query function
  const queryFn = async () => {};

  return useSuspenseQuery(tasksQueryOptions);
};
