import { SuccessResponse } from "@/api/types";
import { tasks } from "@/mocks";
import { Task } from "@/modules/tasks/interfaces";
import { useQuery } from "@tanstack/react-query";

export const useTasksQuery = () => {
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

  //TODO: Implement real query function
  const queryFn = async () => {};

  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => mockQueryFn("resolve"),
  });

  return { data: isSuccess ? data.data : [], isLoading, isSuccess, error };
};
